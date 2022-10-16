import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
    Token,
    Token__factory,
    Factory,
    Factory__factory
} from '../typechain-types';

import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

import { toWei } from './shared/utilities';

describe('Factory', async () => {
    let factory: Factory;
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
    });
    it('is deployed', async () => {
        expect(token0.address).not.to.be.null;
        expect(token0.address).not.to.be.undefined;
        expect(token1.address).not.to.be.null;
        expect(token1.address).not.to.be.undefined;
        expect(factory.address).not.to.be.null;
        expect(factory.address).not.to.be.undefined;
    });
    it('will create pool', async () => {
        const poolAddress = await factory.callStatic.createPool(
            token0.address,
            token1.address
        );
        await factory.createPool(token0.address, token1.address);
        expect(poolAddress).to.be.equal(
            await factory.getPool(token0.address, token1.address)
        );
    });
    it('will create pool with zero address', async () => {
        await expect(
            factory.createPool(ethers.constants.AddressZero, token0.address)
        ).to.be.revertedWith('zero address');
    });
    it('will create pool when pool exist', async () => {
        await factory.createPool(token0.address, token1.address);
        await expect(
            factory.createPool(token0.address, token1.address)
        ).to.be.revertedWith('pool already created');
    });
    it('will create pool with same addresses', async () => {
        await expect(
            factory.createPool(token0.address, token0.address)
        ).to.be.revertedWith('same tokens');
    });
});
