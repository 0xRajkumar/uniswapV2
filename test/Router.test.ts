import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
    Pool__factory,
    Token,
    Token__factory,
    Factory,
    Factory__factory,
    Router,
    Router__factory,
    Library__factory,
    Library
} from '../typechain-types';
import { toWei, fromWei } from './shared/utilities';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
describe('Router', function () {
    let router: Router;
    let factory: Factory;
    let library: Library;
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
        // await factory.createPool(token0.address, token1.address);
        const Library = (await ethers.getContractFactory(
            'Library'
        )) as Library__factory;
        library = await Library.deploy();
        await library.deployed();
        const Router = (await ethers.getContractFactory('Router', {
            signer: owner,
            libraries: {
                Library: library.address
            }
        })) as Router__factory;

        router = await Router.deploy(factory.address);
        await router.deployed();
    });
    it('is deployed', async () => {
        expect(token0.address).not.to.be.null;
        expect(token0.address).not.to.be.undefined;
        expect(token1.address).not.to.be.null;
        expect(token1.address).not.to.be.undefined;
        expect(router.address).not.to.be.null;
        expect(router.address).not.to.be.undefined;
        expect(factory.address).not.to.be.null;
        expect(factory.address).not.to.be.undefined;
    });
    describe('Add liquidity ', () => {
        beforeEach(async () => {
            token0.approve(router.address, toWei(1));
            token1.approve(router.address, toWei(1));
            await router.addLiquidity(
                token0.address,
                token1.address,
                toWei(1),
                toWei(1),
                toWei(1),
                toWei(1),
                owner.address
            );
        });
        it('test add liquidity create pool', async () => {
            const poolAddress = await factory.getPool(
                token0.address,
                token1.address
            );
            expect(poolAddress).to.be.not.null;
            expect(poolAddress).to.be.not.undefined;
        });
        it('test add liquidity when no pool', async () => {
            const poolAddress = await factory.getPool(
                token0.address,
                token1.address
            );
            expect(
                (await token0.balanceOf(poolAddress)).toString()
            ).to.be.equal(toWei(1));
            expect(
                (await token1.balanceOf(poolAddress)).toString()
            ).to.be.equal(toWei(1));
        });
        it('adds liquidity when we have more min AmountB', async () => {
            await expect(
                router.addLiquidity(
                    token0.address,
                    token1.address,
                    toWei(2),
                    toWei(2),
                    toWei(2),
                    toWei(2.1),
                    owner.address
                )
            ).to.be.revertedWith('insufficient amount B');
        });

        it('adds liquidity when we have more min AmountB', async () => {
            await expect(
                router.addLiquidity(
                    token0.address,
                    token1.address,
                    toWei(2),
                    toWei(1.9),
                    toWei(2),
                    toWei(2),
                    owner.address
                )
            ).to.be.revertedWith('insufficient amount A');
        });
    });
    describe('Remove liquidity', () => {
        beforeEach(async () => {
            token0.approve(router.address, toWei(4));
            token1.approve(router.address, toWei(4));
            await router.addLiquidity(
                token0.address,
                token1.address,
                toWei(1),
                toWei(1),
                toWei(1),
                toWei(1),
                owner.address
            );
        });
        it('removes liquidity from pool', async () => {
            token0.connect(secondUser).approve(router.address, toWei(2));
            token1.connect(secondUser).approve(router.address, toWei(2));
            router.addLiquidity(
                token0.address,
                token1.address,
                toWei(1),
                toWei(1),
                toWei(1),
                toWei(1),
                secondUser.address
            );
            const poolAddress = await factory.getPool(
                token0.address,
                token1.address
            );

            const Pool = (await ethers.getContractFactory(
                'Pool'
            )) as Pool__factory;
            const pool = Pool.attach(poolAddress);
            expect(
                (await pool.balanceOf(secondUser.address)).toString()
            ).to.be.equal(toWei(1));
            pool.connect(secondUser).approve(router.address, toWei(1));
            await router
                .connect(secondUser)
                .removeLiquidity(
                    token0.address,
                    token1.address,
                    toWei(1),
                    toWei(1),
                    toWei(1),
                    secondUser.address
                );
            expect(
                (await pool.balanceOf(secondUser.address)).toString()
            ).to.be.equal(toWei(0));
        });
        it('removes liquidity from pool with high min amount', async () => {
            token0.connect(secondUser).approve(router.address, toWei(2));
            token1.connect(secondUser).approve(router.address, toWei(2));
            router.addLiquidity(
                token0.address,
                token1.address,
                toWei(1),
                toWei(1),
                toWei(1),
                toWei(1),
                secondUser.address
            );
            const poolAddress = await factory.getPool(
                token0.address,
                token1.address
            );

            const Pool = (await ethers.getContractFactory(
                'Pool'
            )) as Pool__factory;
            const pool = Pool.attach(poolAddress);
            expect(
                (await pool.balanceOf(secondUser.address)).toString()
            ).to.be.equal(toWei(1));
            pool.connect(secondUser).approve(router.address, toWei(1));

            await expect(
                router
                    .connect(secondUser)
                    .removeLiquidity(
                        token0.address,
                        token1.address,
                        toWei(1),
                        toWei(2),
                        toWei(2),
                        secondUser.address
                    )
            ).to.be.rejectedWith('Insufficient amount');
        });
    });

    describe('Swap', () => {
        beforeEach(async () => {
            token0.approve(router.address, toWei(4));
            token1.approve(router.address, toWei(4));
            await router.addLiquidity(
                token0.address,
                token1.address,
                toWei(1),
                toWei(1),
                toWei(1),
                toWei(1),
                owner.address
            );
        });
        describe('Exact tokens for tokens', () => {
            it('swaps exact tokens for tokens', async () => {
                await router.swapExactTokensForTokens(
                    toWei(0.1),
                    toWei(0.09),
                    [token0.address, token1.address],
                    owner.address
                );
                expect(
                    fromWei((await token0.balanceOf(owner.address)).toString())
                ).to.be.equal(9998.9);
                expect(
                    fromWei((await token1.balanceOf(owner.address)).toString())
                ).to.be.equal(9999.090661089387);
            });
            it('swaps exact tokens for more tokens than expected', async () => {
                await expect(
                    router.swapExactTokensForTokens(
                        toWei(0.1),
                        toWei(0.1),
                        [token0.address, token1.address],
                        owner.address
                    )
                ).to.be.rejectedWith('insufficient amount');
            });
        });
        describe('Tokens for exact tokens', () => {
            it('swaps tokens for exact tokens', async () => {
                const token1BalanceOfOwner = await token1.balanceOf(
                    owner.address
                );
                await router.swapTokensForExactTokens(
                    toWei(0.08),
                    toWei(0.1),
                    [token0.address, token1.address],
                    owner.address
                );
                expect(
                    fromWei((await token1.balanceOf(owner.address)).toString())
                ).to.be.equal(fromWei(token1BalanceOfOwner.toString()) + 0.08);
            });
            it('swaps tokens for more exact tokens than expected', async () => {
                await expect(
                    router.swapTokensForExactTokens(
                        toWei(0.09),
                        toWei(0.1),
                        [token0.address, token1.address],
                        owner.address
                    )
                ).to.be.rejectedWith('excessive amount');
            });
        });
    });
});
