// @ts-ignore

import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [],
    }
  },
  // etherscan: {
  //   apiKey: process.env.API_KEY,
  // }
};

export default config;
