const RAPI = require("rewardMarket-api");
// browser
//await window.ethereum.request({ method: "eth_requestAccounts" });
//const api = CAPI.new(window.ethereum);

const provider = new RAPI.newProvider.HttpProvider("http://127.0.0.1:7545");
const api = RAPI.new(provider);

async function run() {
  await api.connectWallet(
    "8d134f1a5394f554d746217f2ae7587124d6a23de1c79e6659b7df8971daba5a"
  );

  console.log(api.account);

  const accounts = await api.eth.getAccounts();
  console.log(accounts);

  const result = await api.addProductManager();
  console.log(result);

  const result2 = await api.getAllProductsEnable();
  console.log(result2);

  const result3 = await api.buyProduct("cash", 0, 6);
  console.log(result3);

  await api.buyProduct("cash", 2, 3);
  await api.buyProduct("cash", 3, 6);

  const result4 = await api.addCustomer(
    0x8bc253221c764ca3a5fb2ae138f8f8a5a83193d3,
    "Kim",
    2425524,
    200000,
    1000
  );
  console.log(result4);

  const result5 = await api.buyProduct("points", 3, 2);
  console.log(result5);
}

run();
