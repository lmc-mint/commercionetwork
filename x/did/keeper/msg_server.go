package keeper

import (
	"context"

	"github.com/commercionetwork/commercionetwork/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (k msgServer) SetDidDocument(goCtx context.Context, msg *types.MsgSetDidDocument) (*types.MsgSetDidDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	timestamp := obtainTimestamp(ctx)

	ddoProposal := msg.DidDocument

	var ddoChain types.DidDocument

	if k.HasDidDocument(ctx, msg.DidDocument.ID) {
		ddoChain, err := k.Keeper.GetDidDocumentOfAddress(ctx, sdk.AccAddress(msg.DidDocument.ID))
		if err != nil {
			return nil, err
		}

		// update fields
		//
		//

		// update the timestamp for the fields that must be updated
		ddoChain.Updated = timestamp
	}

	ddoChain = types.DidDocument{
		Context:              ddoProposal.Context,
		ID:                   ddoProposal.ID,
		VerificationMethod:   ddoProposal.VerificationMethod,
		Service:              ddoProposal.Service,
		Authentication:       ddoProposal.Authentication,
		AssertionMethod:      ddoProposal.AssertionMethod,
		CapabilityDelegation: ddoProposal.CapabilityDelegation,
		CapabilityInvocation: ddoProposal.CapabilityInvocation,
		KeyAgreement:         ddoProposal.KeyAgreement,
		Created:              timestamp,
		// Updated:              timestamp, // "The updated property is omitted if an Update operation has never been performed on the DID document"
	}

	id := k.AppendDidDocument(ctx, ddoChain)

	return &types.MsgSetDidDocumentResponse{ID: id}, nil
}
