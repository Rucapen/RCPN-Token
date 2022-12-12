// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract RucapenCoin is Initializable, ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor

    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __ERC20_init("RucapenCoin", "RCPN");
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, 1_000_000_000 * 10 ** decimals());
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
