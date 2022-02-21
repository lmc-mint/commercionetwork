package types

const (
	ModuleName   = "vbr"
	StoreKey     = ModuleName
	RouterKey    = ModuleName
	QuerierRoute = ModuleName
	MemStoreKey  = "mem_vbr"

	MsgTypeIncrementBlockRewardsPool = "incrementBlockRewardsPool"
	MsgTypeSetParams                 = "setParams"
	PoolStoreKey                     = StoreKey + ":pool:"

	QueryBlockRewardsPoolFunds = "funds"
	QueryParams                = "params"

	EpochWeek   = "week"
	EpochDay    = "day"
	EpochHour   = "hour"
	EpochMinute = "minute"
	EpochMonth  = "month"

	BondDenom = "ucommercio"
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}
