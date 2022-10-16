import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
    Pool,
    Pool__factory,
    Token,
    Token__factory,
    Factory,
    Factory__factory,
    Flashloan__factory
} from '../typechain-types';

import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

import { toWei, fromWei } from './shared/utilities';

describe('Pool', function () {
    let factory: Factory;
    let pool: Pool;
    let token0: Token;
    let token1: Token;
    let owner: SignerWithAddress;
    let secondUser: SignerWithAddress;
    beforeEach(async () => {
        [owner, secondUser] = await ethers.getSigners();
        const Token = (await ethers.getContractFactory(
            'Token'
        )) as Token__factory;
        token0 = await Token.deploy('token0', 't0', toWei(10000));
        await token0.deployed();
        token1 = await Token.deploy('token1', 't1', toWei(10000));
        await token1.deployed();
        const Factory = (await ethers.getContractFactory(
            'Factory'
        )) as Factory__factory;
        factory = await Factory.deploy();
        await factory.deployed();
        const poolAddress = await factory.callStatic.createPool(
            token0.address,
            token1.address
        );
        await factory.createPool(token0.address, token1.address);
        const Pool = (await ethers.getContractFactory('Pool')) as Pool__factory;
        pool = Pool.attach(poolAddress);
    });
    it('is deployed', async () => {
        expect(token0.address).not.to.be.null;
        expect(token0.address).not.to.be.undefined;
        expect(token1.address).not.to.be.null;
        expect(token1.address).not.to.be.undefined;
        expect(pool.address).not.to.be.null;
        expect(pool.address).not.to.be.undefined;
        expect(factory.address).not.to.be.null;
        expect(factory.address).not.to.be.undefined;
    });

    describe('Mint', async () => {
        beforeEach(async () => {
            await token0.transfer(pool.address, toWei(10));
            await token1.transfer(pool.address, toWei(10));
            await pool.mint(owner.address);
        });
        it('is mint', async () => {
            expect((await pool.totalSupply()).toString()).to.be.equal(
                toWei(10)
            );
            expect(
                (await pool.balanceOf(owner.address)).toString()
            ).to.be.equal('9999999999999997000');
        });
        it('mint lp tokens when we provide unbalanced', async () => {
            await token0.transfer(pool.address, toWei(10));
            await token1.transfer(pool.address, toWei(100));
            await pool.mint(owner.address);
            expect((await pool.totalSupply()).toString()).to.be.equal(
                toWei(20)
            );
        });
    });

    describe('Burn', async () => {
        it('burns added lp tokens', async () => {
            await token0.transfer(pool.address, toWei(10));
            await token1.transfer(pool.address, toWei(10));
            await pool.mint(owner.address);
            await token0.transfer(secondUser.address, toWei(10));
            await token1.transfer(secondUser.address, toWei(10));
            await token0.connect(secondUser).transfer(pool.address, toWei(10));
            await token1.connect(secondUser).transfer(pool.address, toWei(10));
            await pool.connect(secondUser).mint(secondUser.address);
            const lpTokenBeforeBurn = await pool.balanceOf(secondUser.address);
            const lpTokenBeforeBurnInNumber = fromWei(
                lpTokenBeforeBurn.toString()
            );
            expect(lpTokenBeforeBurnInNumber).to.be.equal(10);
            await pool.connect(secondUser).transfer(pool.address, toWei(10));
            await pool.connect(secondUser).burn(secondUser.address);
            const lpTokenAfterBurn = await pool.balanceOf(secondUser.address);
            const lpTokenAfterBurnInNumber = fromWei(
                lpTokenAfterBurn.toString()
            );
            expect(lpTokenAfterBurnInNumber).to.be.equal(0);
        });
        it('burns added lp tokens when unbalanced', async () => {
            await token0.transfer(pool.address, toWei(2));
            await token1.transfer(pool.address, toWei(8));
            await pool.mint(owner.address);
            await token0.transfer(secondUser.address, toWei(8));
            await token1.transfer(secondUser.address, toWei(2));
            await token0.connect(secondUser).transfer(pool.address, toWei(8));
            await token1.connect(secondUser).transfer(pool.address, toWei(2));
            await pool.connect(secondUser).mint(secondUser.address);
            const lpTokenBeforeBurn = await pool.balanceOf(secondUser.address);
            const lpTokenBeforeBurnInNumber = fromWei(
                lpTokenBeforeBurn.toString()
            );
            expect(lpTokenBeforeBurnInNumber).to.be.equal(1);
            await pool.connect(secondUser).transfer(pool.address, toWei(1));
            await pool.connect(secondUser).burn(secondUser.address);
            const lpTokenAfterBurn = await pool.balanceOf(secondUser.address);
            const lpTokenAfterBurnInNumber = fromWei(
                lpTokenAfterBurn.toString()
            );
            expect(lpTokenAfterBurnInNumber).to.be.equal(0);
        });
    });

    describe('swap', async () => {
        it('is simple swap', async () => {
            await token0.transfer(pool.address, toWei(1));
            await token1.transfer(pool.address, toWei(2));
            await pool.mint(owner.address);
            //Taking approx
            const amountOut = toWei(0.18);
            await token0.transfer(pool.address, toWei(0.1));
            //be aware of order of token :)
            await pool.swap(amountOut, 0, owner.address, '0x');
            expect(
                (await token0.balanceOf(pool.address)).toString()
            ).to.be.equal(toWei(1.1));
            expect(
                (await token1.balanceOf(pool.address)).toString()
            ).to.be.equal(toWei(2 - 0.18));
        });
        it('is reverse swap', async () => {
            await token0.transfer(pool.address, toWei(1));
            await token1.transfer(pool.address, toWei(2));
            await pool.mint(owner.address);
            const amountOut = toWei(0.09);
            await token1.transfer(pool.address, toWei(0.2));
            //be aware of order of token :)
            await pool.swap(amountOut, 0, owner.address, '0x');
            expect(
                (await token0.balanceOf(pool.address)).toString()
            ).to.be.equal(toWei(1 - 0.09));
            expect(
                (await token1.balanceOf(pool.address)).toString()
            ).to.be.equal(toWei(2.2));
        });
        it('it should revert when output amounts zero', async () => {
            await token0.transfer(pool.address, toWei(1));
            await token1.transfer(pool.address, toWei(2));
            await pool.mint(owner.address);
            await expect(
                pool.swap(0, 0, owner.address, '0x')
            ).to.be.revertedWith('invalid amount');
        });
        it('low liquidity', async () => {
            await token0.transfer(pool.address, toWei(1));
            await token1.transfer(pool.address, toWei(2));
            await pool.mint(owner.address);
            await expect(
                pool.swap(toWei(3), 0, owner.address, '0x')
            ).to.be.revertedWith('insufficient liquidity');
            await expect(
                pool.swap(0, toWei(2), owner.address, '0x')
            ).to.be.revertedWith('insufficient liquidity');
        });
    });

    it('tests flashloan', async () => {
        const Flashloan = (await ethers.getContractFactory(
            'Flashloan'
        )) as Flashloan__factory;
        const flashloan = await Flashloan.deploy();
        await flashloan.deployed();

        await token0.transfer(pool.address, toWei(5));
        await token1.transfer(pool.address, toWei(5));
        await pool.mint(owner.address);
        const loanAmountInEther = 1;
        const fees = (99.7 * loanAmountInEther) / 100;
        token1.transfer(flashloan.address, toWei(fees));
        flashloan.getFlashloan(pool.address, token1.address);
    });
});
