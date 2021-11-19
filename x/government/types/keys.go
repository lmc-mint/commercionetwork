package types

const (
	// ModuleName defines the module name
	ModuleName = "government"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_" + ModuleName

	// this line is used by starport scaffolding # ibc/keys/name
	GovernmentStoreKey     = StoreKey + "government"
	QueryGovernmentAddress = "governmentAddress"
)
