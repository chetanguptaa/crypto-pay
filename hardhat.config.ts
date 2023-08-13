// @ts-ignore

import * as W from '@nomiclabs/hardhat-waffle';
import * as E from '@nomiclabs/hardhat-etherscan';
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.TZ,
      accounts: [],
    }
  },
  etherscan: {
    apiKey: process.env.TZ,
  }
};

export default config;
