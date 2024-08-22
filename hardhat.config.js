require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config('.env');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  solidity: {
    compilers: [
      { version: "0.8.24" },
    
    ],
    enabled: false
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/EbE-2TjGypOSyGyh3DjAWCwr5gjkmY2j`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
