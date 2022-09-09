# IWipeable









## Methods

### wipe

```solidity
function wipe(address account, uint32 amount) external nonpayable returns (bool)
```



*Operation to wipe a token `amount` from `account` Validate that there is sufficient token balance before wipe *

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account where to wipe the token |
| amount | uint32 | The number of tokens to wipe |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | boolean True if successful        |



## Events

### TokensWiped

```solidity
event TokensWiped(address token, address account, uint32 amount)
```



*Emitted when the `amount` tokens are wiped from `account`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token  | address | Token address |
| account  | address | The address of the account where to wipe the token |
| amount  | uint32 | The number of tokens to wipe |


