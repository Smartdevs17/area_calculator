const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { expect } = require("chai");
  
  describe("AreaCalculator", function () {
    async function deployAreaCalculatorFixture() {
        const AreaCalculator = await ethers.getContractFactory("AreaCalculator");
        const areaCalculator = await AreaCalculator.deploy();
        return { areaCalculator };
    }
    
  describe("Calculations", function () {
    let areaCalculator;

    beforeEach(async function () {
      const { areaCalculator: instance } = await loadFixture(deployAreaCalculatorFixture);
      areaCalculator = instance;
    });

    it("should calculate triangle area correctly", async function () {
      const base = 5;
      const height = 4;
      const expectedArea = 10; 

      const area = await areaCalculator.calculateTriangle(base, height);
      expect(area).to.equal(expectedArea);
    });

    it("should calculate rectangle area correctly", async function () {
      const length = 6;
      const width = 4;
      const expectedArea = 24; 

      const area = await areaCalculator.calculateRectangle(length, width);
      expect(area).to.equal(expectedArea);
    });

    it("should calculate square area correctly", async function () {
      const side = 5;
      const expectedArea = 25; // 5 * 5 = 25

      const area = await areaCalculator.calculateSquare(side);
      expect(area).to.equal(expectedArea);
    });

    it("should handle zero inputs correctly", async function () {
      expect(await areaCalculator.calculateTriangle(0, 5)).to.equal(0);
      expect(await areaCalculator.calculateRectangle(0, 5)).to.equal(0);
      expect(await areaCalculator.calculateSquare(0)).to.equal(0);
    });

    it("should handle large numbers correctly", async function () {
      const largeNumber = 2n ** 128n - 1n; // Max uint128
      const expectedSquareArea = largeNumber * largeNumber;

      const area = await areaCalculator.calculateSquare(largeNumber);
      expect(area).to.equal(expectedSquareArea);
    });
  });

  });
  