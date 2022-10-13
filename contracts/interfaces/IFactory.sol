// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IFactory {
    function getPair(address, address) external pure returns (address);

    function createPair(address, address) external returns (address);
}
