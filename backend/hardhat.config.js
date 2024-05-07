require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url:"https://sepolia.infura.io/v3/39274895cec54a43bc080c087a46ce9e",
      accounts: process.env.PRIVATE_KEY,
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },

  },
};
