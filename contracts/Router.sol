// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;
import './interfaces/IFactory.sol';
import './interfaces/IPool.sol';
import './Library.sol';

contract Router {
    IFactory factory;

    constructor(address _factoryAddress) {
        factory = IFactory(_factoryAddress);
    }

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 minAmountA,
        uint256 minAmountB,
        address to
    )
        public
        returns (
            uint256 amountA,
            uint256 amountB,
            uint256 liquidity
        )
    {
        if (factory.getPool(tokenA, tokenB) == address(0)) {
            factory.createPool(tokenA, tokenB);
        }
        (amountA, amountB) = _calculateLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            minAmountA,
            minAmountB
        );
        address PoolAddress = Library.poolFor(address(factory), tokenA, tokenB);
        _safeTransferFrom(tokenA, msg.sender, PoolAddress, amountA);
        _safeTransferFrom(tokenB, msg.sender, PoolAddress, amountB);
        liquidity = IPool(PoolAddress).mint(to);
    }

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 minAmountA,
        uint256 minAmountB,
        address to
    ) public returns (uint256, uint256) {
        address PoolAddress = Library.poolFor(address(factory), tokenA, tokenB);
        IPool(PoolAddress).transferFrom(msg.sender, PoolAddress, liquidity);
        (uint256 amountA, uint256 amountB) = IPool(PoolAddress).burn(to);
        require(
            amountA >= minAmountA && amountB >= minAmountB,
            'Insufficient amount'
        );
        return (amountA, amountB);
    }

    function _calculateLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 minAmountA,
        uint256 minAmountB
    ) internal returns (uint256, uint256) {
        (uint256 reserveA, uint256 reserveB) = Library.getReserves(
            address(factory),
            tokenA,
            tokenB
        );
        uint256 amountA;
        uint256 amountB;
        if (reserveA == 0 && reserveB == 0) {
            (amountA, amountB) = (amountADesired, amountBDesired);
            return (amountA, amountB);
        }
        uint256 amountBOptimal = Library.quote(
            amountADesired,
            reserveA,
            reserveB
        );
        if (amountBOptimal <= amountBDesired) {
            require(amountBOptimal >= minAmountB, 'insufficient amount B');
            (amountA, amountB) = (amountADesired, amountBOptimal);
            return (amountA, amountB);
        } else {
            uint256 amountAOptimal = Library.quote(
                amountBDesired,
                reserveB,
                reserveA
            );
            require(amountAOptimal <= amountADesired, 'low amount A and B');
            require(amountAOptimal >= minAmountA, 'insufficient amount A');
            (amountA, amountB) = (amountBOptimal, amountBDesired);
            return (amountA, amountB);
        }
    }

    function _safeTransferFrom(
        address token,
        address from,
        address to,
        uint256 value
    ) private {
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSignature(
                'transferFrom(address,address,uint256)',
                from,
                to,
                value
            )
        );
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            'SafeTransferFailed'
        );
    }

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to
    ) public returns (uint256[] memory) {
        uint256[] memory amounts = Library.getAmountsOut(
            address(factory),
            amountIn,
            path
        );
        require(
            amounts[amounts.length - 1] > amountOutMin,
            'insufficient amount'
        );
        _safeTransferFrom(
            path[0],
            msg.sender,
            Library.poolFor(address(factory), path[0], path[1]),
            amounts[0]
        );
        _swap(amounts, path, to);
        return amounts;
    }

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to
    ) public returns (uint256[] memory) {
        uint256[] memory amounts = Library.getAmountsIn(
            address(factory),
            amountOut,
            path
        );
        require(amounts[0] < amountInMax, 'excessive amount');
        _safeTransferFrom(
            path[0],
            msg.sender,
            Library.poolFor(address(factory), path[0], path[1]),
            amounts[0]
        );
        _swap(amounts, path, to);
        return amounts;
    }

    function _swap(
        uint256[] memory amounts,
        address[] memory path,
        address _to
    ) public {
        for (uint256 i; i < path.length - 1; i++) {
            (address input, address output) = (path[i], path[i + 1]);
            (address token0, ) = Library.sortTokens(input, output);
            uint256 amountOut = amounts[i + 1];
            (uint256 amount0Out, uint256 amount1Out) = input == token0
                ? (uint256(0), amountOut)
                : (amountOut, uint256(0));
            address to = i < path.length - 2
                ? Library.poolFor(address(factory), output, path[i + 2])
                : _to;
            IPool(Library.poolFor(address(factory), input, output)).swap(
                amount0Out,
                amount1Out,
                to,
                ''
            );
        }
    }
}
