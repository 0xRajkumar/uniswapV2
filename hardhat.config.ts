import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@nomicfoundation/hardhat-chai-matchers';
dotenv.config();

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    for (const account of accounts) {
        console.log(account.address);
    }
});

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    solidity: '0.8.10',
    networks: {
        hardhat: {
            chainId: 1337
        },
        ropsten: {
            url: process.env.ROPSTEN_URL || '',
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : []
        }
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: 'USD'
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};

export default config;
