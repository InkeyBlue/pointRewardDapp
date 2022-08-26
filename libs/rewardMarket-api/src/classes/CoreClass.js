const Utils = require("../functions/utils");
const ethers = require("ethers");
const Web3 = require("web3");
const rewardMarketAbi = require("../../contracts/RewardMarketAbi");
const gas = 2500000;

module.exports = class {
  constructor(
    provider,
    rewardMarketContAddr = "0xE443f094978940a8c44Fff3069cb78c2b2CC71fD"
  ) {
    this.utils = Web3.utils;
    this.provider = provider;
    this.web3 = new Web3(provider);
    this.eth = this.web3.eth;
    this.rewardMarketContAddr = rewardMarketContAddr;
    this.methods = new this.eth.Contract(
      rewardMarketAbi,
      rewardMarketContAddr
    ).methods;
  }

  async connectWallet(localPrivKey) {
    if (this.provider.enable) {
      // there is browser provider = meta mask
      const [account] = await this.provider.enable();
      this.account = account;
      return this;
    }

    if (localPrivKey === undefined) return this;

    // local
    const { address } = await this.eth.accounts.privateKeyToAccount(
      localPrivKey
    );
    /*
      const { address } = await this.eth.accounts.wallet.add(localPrivKey);
    */
    this.account = address;
    return this;
  }

  async addProductManager() {
    const result = await this.methods.addProductManager();

    return result;
  }

  async addCompany(
    companyAddress,
    companyName,
    companyBalance,
    rewardPoints,
    companyId
  ) {
    const result = await this.methods.addCompany(
      companyAddress,
      companyName,
      companyBalance,
      rewardPoints,
      companyId
    );

    return result;
  }

  async addCustomer(
    customerAddress,
    customerName,
    customerId,
    customerBalance,
    rewardPoints
  ) {
    const result = await this.methods.addCustomer(
      customerAddress,
      customerName,
      customerId,
      customerBalance,
      rewardPoints
    );

    return result;
  }

  async addProduct(
    productName,
    productCost,
    productRating,
    productAmount,
    productOwner
  ) {
    const result = await this.methods.addProduct(
      productName,
      productCost,
      productRating,
      productAmount,
      productOwner
    );

    return result;
  }

  async buyProduct(paymentMethods, productIndex, buyAmount) {
    const result = await this.methods.buyProduct(
      paymentMethods,
      productIndex,
      buyAmount
    );
    return result;
  }

  async getAllProductsEnable() {
    const totalSupply = await this.methods.getAllProductsEnable().call();

    return totalSupply;
  }

  //영수증 트랜잭션 확인
  getTransactionReceipt(txHash) {
    return this.eth.getTransactionReceipt(Utils.attach0x(txHash));
  }

  //트랜잭션 확인
  async getTransaction(txHash) {
    /* txHash =
      "0xc2d6ab845405783ae61d96a598ecf9f44886538c930f46d7ac816b10a094a540"; */

    const tx = await this.eth.getTransaction(Utils.attach0x(txHash));

    if (!tx) return;

    const { input } = tx;

    if (typeof input !== "string" || input === "0x" || input === "") {
      tx.input = {};
      return tx;
    }

    const result = this.decode(removed, "tx");

    tx.input = result;
    return tx;
  }

  getLatestBlockNumber() {
    return this.eth.getBlockNumber();
  }

  // async getBlockNumber(tokenId) {
  //   const blockNumber = await this.methods.getBlockNumber(tokenId).call();

  //   return blockNumber;
  // }

  decode(value, kind) {
    if (typeof value !== "string") throw new Error(`${value} is not valid`);
    switch (kind) {
      case "tokenURI":
        return this.eth.abi.decodeParameters(
          [
            { type: "address", name: "recipient" },
            { type: "string", name: "tokenURI" },
          ],
          "0x" + value.slice(10)
        );
      case "price":
        return this.eth.abi.decodeParameters(
          [
            { type: "address", name: "seller" },
            { type: "address", name: "owner" },
            { type: "uint256", name: "price" },
            { type: "bool", name: "sold" },
          ],
          value
        );
      default:
        throw new Error(`decoding error: unexpected kind`);
    }
  }
};
