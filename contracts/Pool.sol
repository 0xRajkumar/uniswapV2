//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;
import 'hardhat/console.sol';
import 'solmate/src/tokens/ERC20.sol';
import './libraries/Math.sol';
import './libraries/UQ112x112.sol';
import './interfaces/ICallee.sol';

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

    constructor() ERC20('UniswapV2', 'UV2', 18) {}

    function initialize(address _token0, address _token1) public {
        require(
            _token0 != address(0) && _token1 != address(0),
            'Pool: zero address'
        );
        token0 = _token0;
        token1 = _token1;
    }

    function mint(address _to) public returns (uint256) {
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
        _mint(_to, liquidity);
        _update(balance0, balance1, reserve0, reserve1);
        return liquidity;
    }

    function burn(address _to) public returns (uint256, uint256) {
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));

        uint256 liquidity = balanceOf[address(this)];
        uint256 amount0 = (balance0 * liquidity) / totalSupply;
        uint256 amount1 = (balance1 * liquidity) / totalSupply;
        require((amount0 > 0) && (amount1 > 0), 'not enough liquidity');
        _burn(address(this), liquidity);
        _safeTransfer(token0, _to, amount0);
        _safeTransfer(token1, _to, amount1);
        IERC20(token0).transfer(msg.sender, amount0);
        IERC20(token1).transfer(msg.sender, amount1);
        balance0 = IERC20(token0).balanceOf(address(this));
        balance1 = IERC20(token1).balanceOf(address(this));
        (uint112 reserve0_, uint112 reserve1_, ) = getReserves();
        _update(balance0, balance1, reserve0_, reserve1_);
        return (amount0, amount1);
    }

    function swap(
        uint256 amount0,
        uint256 amount1,
        address to,
        bytes calldata data
    ) public {
        require(amount0 > 0 || amount1 > 0, 'invalid amount');
        (uint112 reserve0_, uint112 reserve1_, ) = getReserves();
        require(
            amount0 < reserve0_ && amount1 < reserve1_,
            'insufficient liquidity'
        );
        if (amount0 > 0) _safeTransfer(token0, to, amount0);
        if (amount1 > 0) _safeTransfer(token1, to, amount1);
        if (data.length > 0) {
            ICallee(to).Callee(msg.sender, amount0, amount1, '');
        }
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));

        uint256 amount0In = balance0 > (reserve0_ - amount0)
            ? balance0 - (reserve0 - amount0)
            : 0;
        uint256 amount1In = balance1 > (reserve1_ - amount1)
            ? balance1 - (reserve1 - amount1)
            : 0;
        require(amount0In > 0 || amount1In > 0, 'insufficient input amount');
        uint256 balance0Adjusted = (1000 * balance0) - (amount0In * 3);
        uint256 balance1Adjusted = (1000 * balance1) - (amount1In * 3);
        require(
            balance0Adjusted * balance1Adjusted >=
                uint256(reserve0_) * uint256(reserve1_) * (1000**2),
            'invalid constant'
        );
        _update(balance0, balance1, reserve0_, reserve1_);
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

    function _safeTransfer(
        address token,
        address to,
        uint256 value
    ) private {
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSignature('transfer(address,uint256)', to, value)
        );
        require(
            !(!success || (data.length != 0 && !abi.decode(data, (bool)))),
            'TransferFailed'
        );
    }

    function getReserves()
        public
        view
        returns (
            uint112,
            uint112,
            uint32
        )
    {
        return (reserve0, reserve1, lastBlockTimeStamp);
    }
}
