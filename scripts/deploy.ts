// @ts-ignore
import hre from "hardhat";

async function main() {
  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  //await paypal.waitForDeployment();

  console.log(
    `paypal deployed to: ${paypal.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
