// SPDX-License-Identifier: BUSL-1.1
import { ethers, network, upgrades } from "hardhat";

/// deploy AssetVault
async function main() {
  const RucapenCoin = await ethers.getContractFactory("RucapenCoin");
  const rucapenCoin = await upgrades.deployProxy(RucapenCoin, []);
  await rucapenCoin.deployed();
  console.log(`Rucapen Coin Deployed to: ${rucapenCoin.address} on ${network.name}`);

  const TokenLocker = await ethers.getContractFactory("TokenLocker");
  const tokenLocker = await TokenLocker.deploy(rucapenCoin.address);
  await tokenLocker.deployed();
  console.log(`Token Locker Deployed to: ${tokenLocker.address} on ${network.name}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
