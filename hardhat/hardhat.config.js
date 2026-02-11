require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.28",
    networks: {
        celoSepolia: {
            url: "https://forno.celo-sepolia.celo-testnet.org",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 11142220,
        },
    },
    etherscan: {
        apiKey: {
            celoSepolia: process.env.ETHERSCAN_API_KEY,
        },
        customChains: [
            {
                network: "celoSepolia",
                chainId: 11142220,
                urls: {
                    apiURL: "https://celo-sepolia.blockscout.com/api",
                    browserURL: "https://celo-sepolia.blockscout.com",
                },
            },
        ],
    },
};
