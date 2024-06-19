require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const HARDHAT_URL = process.env.HARDHAT_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports =  {
  solidity: "0.8.19",
  networks: {
    LOCALHOST: {
      url: HARDHAT_URL,
      accounts:  [PRIVATE_KEY],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  }
};

//0x5FbDB2315678afecb367f032d93F642f64180aa3