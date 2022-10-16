//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import 'hardhat/console.sol';
import '../interfaces/IPool.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Flashloan {
    //will test for token one only
    uint256 loanAmount = 1 ether;

    function getFlashloan(address poolAddress, address token1Address) public {
        IPool(poolAddress).swap(
            0,
            loanAmount,
            address(this),
            abi.encode(token1Address)
        );
    }

    function Call(
        address sender,
        uint256 amount0Out,
        uint256 amount1Out,
        bytes calldata data
    ) external {
        address tokenAddress = abi.decode(data, (address));
        uint256 balance = IERC20(tokenAddress).balanceOf(address(this));
        require(balance > loanAmount, 'Insufficient flash loan amount');
        // msg.sender is pool address which is calling this function
        IERC20(tokenAddress).transfer(msg.sender, amount1Out);
    }
}
