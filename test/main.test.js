const { expect } = require("chai");

describe("main.test", function () {
  it("Greeter Test", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Token Test", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(10000);

    await token.transfer(addr1.address, 100);
    expect(await token.balanceOf(addr1.address)).to.equal(100);

    await token.transfer(addr2.address, 200);
    expect(await token.balanceOf(addr2.address)).to.equal(200);
  });
});
