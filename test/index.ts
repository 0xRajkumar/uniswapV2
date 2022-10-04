import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Pool, Pool__factory, Token, Token__factory } from '../typechain-types';
const toWei = (value: number): string => {
    return ethers.utils.parseEther(value.toString()).toString();
};
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
const getBalance = ethers.provider.getBalance;
const fromWei = (value: string): number => {
    return Number(ethers.utils.formatEther(value));
};
describe('Pool', function () {
    let token0: Token;
    let token1: Token;
    let pool: Pool;
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
        const Pool = (await ethers.getContractFactory('Pool')) as Pool__factory;
        pool = await Pool.deploy(token0.address, token1.address);
        await pool.deployed();
    });
    it('is deployed', async () => {
        expect(token0.address).not.to.be.null;
        expect(token0.address).not.to.be.undefined;
        expect(token1.address).not.to.be.null;
        expect(token1.address).not.to.be.undefined;
        expect(pool.address).not.to.be.null;
        expect(pool.address).not.to.be.undefined;
    });

    describe('Mint', async () => {
        beforeEach(async () => {
            await token0.transfer(pool.address, toWei(10));
            await token1.transfer(pool.address, toWei(10));
            await pool.mint();
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
            await pool.mint();
            expect((await pool.totalSupply()).toString()).to.be.equal(
                toWei(20)
            );
        });
    });

    describe('Burn', async () => {
        it('burns added lp tokens', async () => {
            await token0.transfer(pool.address, toWei(10));
            await token1.transfer(pool.address, toWei(10));
            await pool.mint();
            await token0.transfer(secondUser.address, toWei(10));
            await token1.transfer(secondUser.address, toWei(10));
            await token0.connect(secondUser).transfer(pool.address, toWei(10));
            await token1.connect(secondUser).transfer(pool.address, toWei(10));
            await pool.connect(secondUser).mint();
            const lpTokenBeforeBurn = await pool.balanceOf(secondUser.address);
            const lpTokenBeforeBurnInNumber = fromWei(
                lpTokenBeforeBurn.toString()
            );
            expect(lpTokenBeforeBurnInNumber).to.be.equal(10);
            await pool.connect(secondUser).burn();
            const lpTokenAfterBurn = await pool.balanceOf(secondUser.address);
            const lpTokenAfterBurnInNumber = fromWei(
                lpTokenAfterBurn.toString()
            );
            expect(lpTokenAfterBurnInNumber).to.be.equal(0);
        });
        it('burns added lp tokens when unbalanced', async () => {
            await token0.transfer(pool.address, toWei(2));
            await token1.transfer(pool.address, toWei(8));
            await pool.mint();
            await token0.transfer(secondUser.address, toWei(8));
            await token1.transfer(secondUser.address, toWei(2));
            await token0.connect(secondUser).transfer(pool.address, toWei(8));
            await token1.connect(secondUser).transfer(pool.address, toWei(2));
            await pool.connect(secondUser).mint();
            const lpTokenBeforeBurn = await pool.balanceOf(secondUser.address);
            const lpTokenBeforeBurnInNumber = fromWei(
                lpTokenBeforeBurn.toString()
            );
            expect(lpTokenBeforeBurnInNumber).to.be.equal(1);
            await pool.connect(secondUser).burn();
            const lpTokenAfterBurn = await pool.balanceOf(secondUser.address);
            const lpTokenAfterBurnInNumber = fromWei(
                lpTokenAfterBurn.toString()
            );
            expect(lpTokenAfterBurnInNumber).to.be.equal(0);
        });
    });
});
