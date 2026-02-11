# Celo Sepolia Testnet Deployment

This repository contains the necessary setup to deploy an `Owner.sol` smart contract to the Celo Sepolia Testnet using both Hardhat and Foundry.

## Prerequisites

- Node.js installed
- Foundry installed (`forge`, `cast`, `anvil`, `chisel`)
- Basic understanding of Solidity and CLI

## Directory Structure

- `hardhat/`: Hardhat project for deployment.
- `foundry/`: Foundry project for deployment.

## Wallet & Funding

**Wallet Address (Generated):** `0x699e2E29fe8Be83F93b61eFf926B4C9C9CE1bBA9`

Before deploying, **fund this address** with Celo Sepolia (Alfajores/Testnet) tokens using the [Celo Faucet](https://faucet.celo.org/).

### Predicted Contract Addresses (Assuming Nonce 0 & 1)

If you deploy first with Hardhat (Nonce 0):
- **Contract Address:** `0xd6955C847cF1F50C1f9e550111F510a8D52B9692`

If you deploy first with Foundry (Nonce 0) or second (Nonce 1):
- **Contract Address (Nonce 1):** `0xA972032aF7ED9A75E5307e26d5101d7D2A7f35C4`

## Deploying with Hardhat

1.  Navigate to the `hardhat/` directory:
    ```bash
    cd hardhat
    npm install
    ```
2.  The `.env` file is pre-configured with the generated private key. Add your `ETHERSCAN_API_KEY` if needed.
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
2.  The `.env` file is pre-configured with the generated private key. Add your `ETHERSCAN_API_KEY` if needed.
3.  Source the environment variables:
    ```bash
    source .env
    ```
4.  Deploy the contract:
    ```bash
    forge script script/Deploy.s.sol:DeployOwner --rpc-url celo_sepolia --broadcast --verify -vvvv
    ```

## GitHub Repository Link

Link to this repository: [Link Here](https://github.com/your-username/celo-deployment)
