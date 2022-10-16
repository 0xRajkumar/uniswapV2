// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IPool {
    function initialize(address, address) external;

    function burn(address) external returns (uint256, uint256);

    function mint(address) external returns (uint256);

    function getReserves()
        external
        returns (
            uint112,
            uint112,
            uint32
        );

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function mint(
        uint256,
        uint256,
        address,
        bytes calldata
    ) external;

    function swap(
        uint256,
        uint256,
        address,
        bytes calldata
    ) external;
}
