// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IFactory {
    function getPool(address, address) external pure returns (address);

    function createPool(address, address) external returns (address);
}
