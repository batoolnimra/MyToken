const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = hre;

describe("MyToken", function () {
  it("Should deploy with correct initial supply", async function () {
    const [owner] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    const initialSupply = hre.ethers.parseUnits("1000", 18);

    const token = await MyToken.deploy(initialSupply);

    await token.waitForDeployment();

    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(initialSupply);
  });
});
