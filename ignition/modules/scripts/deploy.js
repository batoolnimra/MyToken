const { ethers } = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const initialSupply = ethers.utils.parseUnits("1000", 18);
  const token = await MyToken.deploy(initialSupply);

  await token.deployed();
  console.log("MyToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

