//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import './Pool.sol';

contract Factory {
    mapping(address => mapping(address => address)) getPair;
    address[] allPairs;

    function createPair(address _tokenA, address _tokenB)
        public
        returns (address pair)
    {
        require(_tokenA != _tokenB, 'same tokens');
        (address token0, address token1) = _tokenA < _tokenB
            ? (_tokenA, _tokenB)
            : (_tokenB, _tokenA);
        require(token0 != address(0), 'zero address');
        require(getPair[token0][token1] != address(0), '');
        bytes memory bytecode = type(Pool).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        Pool(pair).initialize(token0, token1);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair;
        allPairs.push(pair);
        return pair;
    }
}
