# Celo Sepolia Testnet Deployment

This repository contains the necessary setup to deploy an `Owner.sol` smart contract to the Celo Sepolia (Alfajores) Testnet using both Hardhat and Foundry.

## Prerequisites

- Node.js installed
- Foundry installed (`forge`, `cast`, `anvil`, `chisel`)
- Basic understanding of Solidity and CLI

## Directory Structure

- `hardhat/`: Hardhat project for deployment.
- `foundry/`: Foundry project for deployment.

## Deploying with Hardhat

1.  Navigate to the `hardhat/` directory:
    ```bash
    cd hardhat
    npm install
    ```
2.  Create a `.env` file from the template and add your `PRIVATE_KEY` and `ETHERSCAN_API_KEY`:
    ```bash
    cp .env.example .env
    # Edit .env
    ```
3.  Deploy the contract:
    ```bash
    npx hardhat run scripts/deploy.js --network celoSepolia
    ```
4.  Verify the contract:
    ```bash
    npx hardhat verify --network celoSepolia <DEPLOYED_CONTRACT_ADDRESS>
    ```

## Deploying with Foundry

1.  Navigate to the `foundry/` directory:
    ```bash
    cd foundry
    forge install
    ```
2.  Create a `.env` file and add your `PRIVATE_KEY`, `CELO_RPC_URL`, and `ETHERSCAN_API_KEY`:
    ```bash
    cp .env.example .env
    # Edit .env
    ```
3.  Deploy the contract:
    ```bash
    source .env
    forge script script/Deploy.s.sol:DeployOwner --rpc-url $CELO_RPC_URL --broadcast --verify -vvvv
    ```

## GitHub Repository Link

Link to this repository: [Link Here](https://github.com/your-username/celo-deployment)
