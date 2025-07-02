const { ethers } = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");

  // parseUnits moved in Ethers v6+
  const initialSupply = ethers.parseUnits("1000", 18);

  const token = await MyToken.deploy(initialSupply);
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("MyToken deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
