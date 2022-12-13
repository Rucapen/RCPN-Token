// SPDX-License-Identifier: BUSL-1.1
import { ethers, network, upgrades } from "hardhat";

/// deploy AssetVault
async function main() {
  console.log(`\n Deploying Rucapen Coin on ${network.name}`);
  const RucapenCoin = await ethers.getContractFactory("RucapenCoin");
  const rucapenCoin = await upgrades.deployProxy(RucapenCoin, []);
  await rucapenCoin.deployed();
  console.log(`Successfully deployed to: ${rucapenCoin.address} \n`);

  console.log(`Deploying AssetVault on ${network.name}`);
  const TokenLocker = await ethers.getContractFactory("TokenLocker");
  const tokenLocker = await TokenLocker.deploy(rucapenCoin.address);
  await tokenLocker.deployed();
  console.log(`Successfully deployed to: ${tokenLocker.address} \n`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
