// SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

import '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';

contract StableCoinFactoryProxy is TransparentUpgradeableProxy {
    constructor(
        address _logic,
        address admin_,
        bytes memory _data
    ) payable TransparentUpgradeableProxy(_logic, admin_, _data) {} // solhint-disable-line no-empty-blocks
}
