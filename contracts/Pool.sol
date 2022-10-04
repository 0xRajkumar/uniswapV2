//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;
import 'hardhat/console.sol';
import 'solmate/src/tokens/ERC20.sol';
import './libraries/Math.sol';
import './libraries/UQ112x112.sol';

interface IERC20 {
    function balanceOf(address) external returns (uint256);

    function transfer(address to, uint256 amount) external;
}

contract Pool is ERC20, Math {
    using UQ112x112 for uint224;

    uint256 constant MINIMUM_LIQUIDITY = 3000;

    address public token0;
    address public token1;

    uint112 reserve0;
    uint112 reserve1;
    uint32 lastBlockTimeStamp;

    uint256 public price0CumulativeLast;
    uint256 public price1CumulativeLast;

    constructor(address _token0, address _token1)
        ERC20('UniswapV2', 'UV2', 18)
    {
        token0 = _token0;
        token1 = _token1;
    }

    function mint() public {
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));
        uint256 amount0 = balance0 - reserve0;
        uint256 amount1 = balance1 - reserve1;
        uint256 liquidity;
        if (totalSupply == 0) {
            liquidity = Math.sqrt(amount0 * amount1) - MINIMUM_LIQUIDITY;
            _mint(address(0), MINIMUM_LIQUIDITY);
        } else {
            liquidity = Math.min(
                (totalSupply * amount0) / reserve0,
                (totalSupply * amount1) / reserve1
            );
        }
        require(liquidity >= 0, 'insufficient liquidity');
        _mint(msg.sender, liquidity);
        _update(balance0, balance1, reserve0, reserve1);
    }

    function burn() public {
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));

        uint256 liquidity = balanceOf[msg.sender];
        uint256 amount0 = (balance0 * liquidity) / totalSupply;
        uint256 amount1 = (balance1 * liquidity) / totalSupply;
        require((amount0 > 0) && (amount1 > 0), 'not enough liquidity');
        _burn(msg.sender, liquidity);
        IERC20(token0).transfer(msg.sender, amount0);
        IERC20(token1).transfer(msg.sender, amount1);
        balance0 = IERC20(token0).balanceOf(address(this));
        balance1 = IERC20(token1).balanceOf(address(this));
        _update(balance0, balance1, reserve0, reserve1);
    }

    function swap(
        uint256 amount0,
        uint256 amount1,
        address to
    ) public {
        require(amount0 > 0 || amount1 > 0, 'invalid amount');
        require(
            amount0 < reserve0 && amount1 < reserve1,
            'insufficient liquidity'
        );
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));
        require(balance0 * balance1 >= reserve0 * reserve1, 'invalid constant');
        _update(balance0, balance1, reserve0, reserve1);
        if (amount0 > 0) IERC20(token0).transfer(to, amount0);
        if (amount1 > 0) IERC20(token1).transfer(to, amount1);
    }

    function _update(
        uint256 _balance0,
        uint256 _balance1,
        uint112 _reserve0,
        uint112 _reserve1
    ) public {
        require(
            _balance0 < type(uint112).max && _balance1 < type(uint112).max,
            'balance overflow'
        );

        unchecked {
            uint32 timeElapsed = uint32(block.timestamp) - lastBlockTimeStamp;
            if (timeElapsed > 0 && _reserve0 > 0 && _reserve1 > 0) {
                price0CumulativeLast =
                    uint224(UQ112x112.encode(_reserve1).uqdiv(_reserve0)) *
                    timeElapsed;
                price1CumulativeLast =
                    uint224(UQ112x112.encode(_reserve0).uqdiv(_reserve1)) *
                    timeElapsed;
            }
        }

        reserve0 = uint112(_balance0);
        reserve1 = uint112(_balance1);
        lastBlockTimeStamp = uint32(block.timestamp);
    }
}
