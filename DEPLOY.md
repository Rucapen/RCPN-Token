Install packages `yarn install`

Prepare contracts: `yarn compile` `yarn typechain`

Deploy to local network - 2 terminals are required:

- 1st terminal: `yarn hardhat node`
- 2nd terminal: `yarn hardhat run --network localhost scripts/deploy.ts`

Deploy to goerli testnet - .env file with infura api key & mnemonic required:
`yarn hardhat run --network goerli scripts/deploy.ts`

Verify deployment to any network with etherscan in CLI:
`yarn hardhat verify --network <chosen-network> <contract-address>`

Deploy to main net: `yarn hardhat run --network mainnet scripts/deploy.ts`
