package keeper

import (
	"context"
	"fmt"

	"github.com/commercionetwork/commercionetwork/x/vbr/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	sdkErr "github.com/cosmos/cosmos-sdk/types/errors"
)
func (k msgServer) IncrementBlockRewardsPool(goCtx context.Context, msg *types.MsgIncrementBlockRewardsPool) (*types.MsgIncrementBlockRewardsPoolResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	//return &types.MsgIncrementBlockRewardsPoolResponse{}, nil
	funderAddr, e := sdk.AccAddressFromBech32(msg.Funder)
	if e != nil {
		return nil, e
	}
	// Subtract the coins from the account
	if err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, funderAddr, types.ModuleName, msg.Amount); err != nil {
		return nil, err
	}

	// Set the total rewards pool
	k.SetTotalRewardPool(ctx, k.GetTotalRewardPool(ctx).Add(sdk.NewDecCoinsFromCoins(msg.Amount...)...))

	return &types.MsgIncrementBlockRewardsPoolResponse{}, nil
}

func (k msgServer) SetRewardRate(goCtx context.Context, msg *types.MsgSetRewardRate) (*types.MsgSetRewardRateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	//_ = ctx
	gov := k.govKeeper.GetGovernmentAddress(ctx)
	msgGovAddr, e := sdk.AccAddressFromBech32(msg.Government)
	if e != nil {
		return nil, e
	}
	if !(gov.Equals(msgGovAddr)) {
		return nil, sdkErr.Wrap(sdkErr.ErrUnauthorized, fmt.Sprintf("%s cannot set reward rate", msg.Government))
	}
	err := k.SetRewardRateKeeper(ctx, msg.RewardRate)
	if err != nil {
		return nil, sdkErr.Wrap(sdkErr.ErrInvalidRequest, err.Error())
	}
	//ctypes.EmitCommonEvents(ctx, msg.Government)

	return &types.MsgSetRewardRateResponse{}, nil
}

func (k msgServer) SetAutomaticWithdraw(goCtx context.Context, msg *types.MsgSetAutomaticWithdraw) (*types.MsgSetAutomaticWithdrawResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	//_ = ctx

	gov := k.govKeeper.GetGovernmentAddress(ctx)
	msgGovAddr, e := sdk.AccAddressFromBech32(msg.Government)
	if e != nil {
		return nil, e
	}
	if !(gov.Equals(msgGovAddr)) {
		return nil, sdkErr.Wrap(sdkErr.ErrUnauthorized, fmt.Sprintf("%s cannot set reward rate", msg.Government))
	}
	err := k.SetAutomaticWithdrawKeeper(ctx, msg.AutomaticWithdraw)
	if err != nil {
		return nil, sdkErr.Wrap(sdkErr.ErrInvalidRequest, err.Error())
	}
	//ctypes.EmitCommonEvents(ctx, msg.Government)

	return &types.MsgSetAutomaticWithdrawResponse{}, nil
}