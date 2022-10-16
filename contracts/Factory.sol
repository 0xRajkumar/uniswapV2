//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import './Pool.sol';
import 'hardhat/console.sol';

contract Factory {
    mapping(address => mapping(address => address)) public getPool;
    address[] public allPools;

    function createPool(address _tokenA, address _tokenB)
        public
        returns (address)
    {
        require(_tokenA != _tokenB, 'same tokens');
        (address token0, address token1) = _tokenA < _tokenB
            ? (_tokenA, _tokenB)
            : (_tokenB, _tokenA);
        require(token0 != address(0), 'zero address');
        require(getPool[token0][token1] == address(0), 'pool already created');
        bytes memory bytecode = type(Pool).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        address pool;
        assembly {
            pool := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        Pool(pool).initialize(token0, token1);
        getPool[token0][token1] = pool;
        getPool[token1][token0] = pool;
        allPools.push(pool);
        return pool;
    }
}
