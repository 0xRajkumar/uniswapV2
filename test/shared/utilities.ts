import { ethers } from 'hardhat';
const toWei = (value: number): string => {
    return ethers.utils.parseEther(value.toString()).toString();
};
const getBalance = ethers.provider.getBalance;
const fromWei = (value: string): number => {
    return Number(ethers.utils.formatEther(value));
};

export { toWei, getBalance, fromWei };
