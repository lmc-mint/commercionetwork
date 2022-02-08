package keeper

import (
	"fmt"

	"github.com/commercionetwork/commercionetwork/x/documents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkErr "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/gofrs/uuid"
)

// SaveDocument allows the sharing of a document
func (keeper Keeper) SaveDocument(ctx sdk.Context, document types.Document) error {
	// Check the id validity
	if _, err := uuid.FromString(document.UUID); err != nil {
		return sdkErr.Wrap(sdkErr.ErrInvalidRequest, fmt.Sprintf("invalid document UUID: %s", document.UUID))
	}

	// Check for an existing document
	if _, err := keeper.GetDocumentByID(ctx, document.UUID); err == nil {
		return sdkErr.Wrap(sdkErr.ErrInvalidRequest, fmt.Sprintf("document with uuid %s already present", document.UUID))
	}

	// Store the document instance
	store := ctx.KVStore(keeper.storeKey)
	store.Set(getDocumentStoreKey(document.UUID), keeper.cdc.MustMarshalBinaryBare(&document))

	// Store the document as sent by the sender

	// Idea: SentDocumentsPrefix + address + document.UUID -> document.UUID
	senderAccadrr, _ := sdk.AccAddressFromBech32(document.Sender)
	sentDocumentsStoreKey := getSentDocumentsIdsUUIDStoreKey(senderAccadrr, document.UUID)

	store.Set(sentDocumentsStoreKey, []byte(document.UUID))

	// Store the documents as received for all the recipients
	for _, recipient := range document.Recipients {
		recipientAccAdrr, _ := sdk.AccAddressFromBech32(recipient)
		receivedDocumentsStoreKey := getReceivedDocumentsIdsUUIDStoreKey(recipientAccAdrr, document.UUID)

		store.Set(receivedDocumentsStoreKey, []byte(document.UUID))
	}

	attributes := make([]sdk.Attribute, 0, len(document.Recipients)+2)

	attributes = append(attributes,
		sdk.NewAttribute("sender", document.Sender),
		sdk.NewAttribute("doc_id", document.UUID),
	)

	for i, r := range document.Recipients {
		attributes = append(attributes, sdk.NewAttribute(
			fmt.Sprintf("receiver_%d", i),
			r,
		))
	}
	ctx.EventManager().EmitEvent(sdk.NewEvent(
		eventSavedDocument,
		attributes...,
	))

	return nil
}

// TODO: remove and use GetDocumentbyID
// ExtractDocument returns a Document slice instance and its UUID given an iterator byte stream value.
func (keeper Keeper) ExtractDocument(ctx sdk.Context, keyVal []byte) (types.Document, string, error) {
	documentUUID := string(keyVal[len(types.DocumentStorePrefix):])

	document, err := keeper.GetDocumentByID(ctx, documentUUID)
	return document, documentUUID, err
}

// getDocumentStoreKey generates an unique store key for a Document UUID
func getDocumentStoreKey(uuid string) []byte {
	return []byte(types.DocumentStorePrefix + uuid)
}

// GetDocumentByID returns the document having the given id
func (k Keeper) GetDocumentByID(ctx sdk.Context, id string) (types.Document, error) {
	store := ctx.KVStore(k.storeKey)
	documentKey := getDocumentStoreKey(id)
	if !store.Has(documentKey) {
		return types.Document{}, fmt.Errorf("cannot find document with uuid %s", id)
	}

	var document types.Document
	k.cdc.MustUnmarshalBinaryBare(store.Get(documentKey), &document)
	return document, nil
}

// HasDocument checks if the Document exists in the store
func (k Keeper) HasDocument(ctx sdk.Context, id string) bool {
	store := ctx.KVStore(k.storeKey)
	documentKey := getDocumentStoreKey(id)
	return store.Has(documentKey)
}

// getSentDocumentsIdsUUIDStoreKey generates a SentDocumentID for a given user and document UUID
func getSentDocumentsIdsUUIDStoreKey(user sdk.AccAddress, documentUUID string) []byte {
	userPart := append(user, []byte(":"+documentUUID)...)
	return append([]byte(types.SentDocumentsPrefix), userPart...)
}

// getSentDocumentsIdsStoreKey generates a ReceivedDocumentsID store key for a given user
func getSentDocumentsIdsStoreKey(user sdk.AccAddress) []byte {
	return append([]byte(types.SentDocumentsPrefix), user...)
}

// getReceivedDocumentsIdsStoreKey generates a ReceivedDocumentsID store key for a given user
func getReceivedDocumentsIdsStoreKey(user sdk.AccAddress) []byte {
	return append([]byte(types.ReceivedDocumentsPrefix), user...)
}

// getReceivedDocumentsIdsUUIDStoreKey generates a ReceivedDocumentID for a given user and document UUID
func getReceivedDocumentsIdsUUIDStoreKey(user sdk.AccAddress, documentUUID string) []byte {
	userPart := append(user, []byte(":"+documentUUID)...)

	return append([]byte(types.ReceivedDocumentsPrefix), userPart...)
}

// DocumentsIterator returns an Iterator for all the Documents saved in the store.
func (keeper Keeper) DocumentsIterator(ctx sdk.Context) sdk.Iterator {
	store := ctx.KVStore(keeper.storeKey)

	return sdk.KVStorePrefixIterator(store, []byte(types.DocumentStorePrefix))
}

// UserSentDocumentsIterator returns an Iterator for all the sent Documents of a user.
func (keeper Keeper) UserSentDocumentsIterator(ctx sdk.Context, user sdk.AccAddress) sdk.Iterator {
	store := ctx.KVStore(keeper.storeKey)

	return sdk.KVStorePrefixIterator(store, getSentDocumentsIdsStoreKey(user))
}

// UserReceivedDocumentsIterator returns an Iterator for all the received Documents of a user.
func (keeper Keeper) UserReceivedDocumentsIterator(ctx sdk.Context, user sdk.AccAddress) sdk.Iterator {
	store := ctx.KVStore(keeper.storeKey)

	return sdk.KVStorePrefixIterator(store, getReceivedDocumentsIdsStoreKey(user))
}
