// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import './interfaces/IPool.sol';
import './interfaces/IFactory.sol';
import './Factory.sol';

library Library {
    function getReserves(
        address factoryAddress,
        address tokenA,
        address tokenB
    ) public returns (uint256 reserveA, uint256 reserveB) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        (uint256 reserve0, uint256 reserve1, ) = IPool(
            poolFor(factoryAddress, token0, token1)
        ).getReserves();
        (reserveA, reserveB) = tokenA == token0
            ? (reserve0, reserve1)
            : (reserve1, reserve0);
    }

    function quote(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) public pure returns (uint256 amountOut) {
        require(amountIn != 0, 'insufficient amount in');
        require(reserveIn != 0 && reserveOut != 0, 'insufficient reserves');
        return (amountIn * reserveOut) / reserveIn;
    }

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) public pure returns (uint256) {
        require(amountIn > 0, 'insufficient amount');
        require(reserveIn > 0 && reserveOut > 0, 'insufficient reserve');
        return
            (997 * amountIn * reserveOut) /
            (1000 * reserveOut + 997 * amountIn);
    }

    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) public pure returns (uint256) {
        require(amountOut > 0, 'insufficient amount');
        require(reserveIn > 0 && reserveOut > 0, 'insufficient reserve');
        return
            ((1000 * reserveIn * amountOut) /
                ((reserveOut - amountOut) * 977)) + 1;
    }

    function getAmountsOut(
        address factory,
        uint256 amountIn,
        address[] memory path
    ) public returns (uint256[] memory) {
        require(path.length >= 2, 'invalid path');
        uint256[] memory amounts = new uint256[](path.length);
        amounts[0] = amountIn;
        for (uint256 i; i < path.length - 1; i++) {
            (uint256 reserve0, uint256 reserve1) = getReserves(
                factory,
                path[i],
                path[i + 1]
            );
            amounts[i + 1] = getAmountOut(amounts[i], reserve0, reserve1);
        }

        return amounts;
    }

    function getAmountsIn(
        address factory,
        uint256 amountOut,
        address[] memory path
    ) public returns (uint256[] memory) {
        require(path.length >= 2, 'invalid path');
        uint256[] memory amounts = new uint256[](path.length);
        amounts[path.length - 1] = amountOut;
        for (uint256 i = path.length - 1; i > 0; i--) {
            (uint256 reserve0, uint256 reserve1) = getReserves(
                factory,
                path[i - 1],
                path[i]
            );
            amounts[i - 1] = getAmountIn(amounts[i], reserve0, reserve1);
        }

        return amounts;
    }

    function sortTokens(address tokenA, address tokenB)
        public
        pure
        returns (address token0, address token1)
    {
        return tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
    }

    function poolFor(
        address factoryAddress,
        address tokenA,
        address tokenB
    ) public pure returns (address poolAddress) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        poolAddress = address(
            uint160(
                uint256(
                    keccak256(
                        abi.encodePacked(
                            hex'ff',
                            factoryAddress,
                            keccak256(abi.encodePacked(token0, token1)),
                            keccak256(type(Pool).creationCode)
                        )
                    )
                )
            )
        );
    }
}
