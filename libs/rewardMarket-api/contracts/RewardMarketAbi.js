const RewardMarketAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "no",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "info",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "CustomerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ProductName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ProductAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "BuyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "PaymentMethods",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "CustomerAsset",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RequireAsset",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RewardPoints",
        type: "uint256",
      },
    ],
    name: "purchase",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_companyAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_companyName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_companyBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
    ],
    name: "addCompany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_customerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_customerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_customerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_customerBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardPoints",
        type: "uint256",
      },
    ],
    name: "addCustomer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_productCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_productRating",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_productAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_productOwner",
        type: "address",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addProductManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_paymentMethods",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_productIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_buyAmount",
        type: "uint256",
      },
    ],
    name: "buyProduct",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "comp",
    outputs: [
      {
        internalType: "address",
        name: "companyAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "companyBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "cust",
    outputs: [
      {
        internalType: "address",
        name: "customerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "customerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "customerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "customerBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPoints",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProductsEnable",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compAddress",
        type: "address",
      },
    ],
    name: "getComp",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "companyAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "companyName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "companyBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPoints",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "companyId",
            type: "uint256",
          },
        ],
        internalType: "struct RewardMarket.company",
        name: "_result",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_custAddress",
        type: "address",
      },
    ],
    name: "getCust",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "customerAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "customerName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "customerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "customerBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPoints",
            type: "uint256",
          },
        ],
        internalType: "struct RewardMarket.customer",
        name: "_result",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
    ],
    name: "getProd",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "productIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "productCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productRating",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "productOwner",
            type: "address",
          },
        ],
        internalType: "struct RewardMarket.product",
        name: "_result",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prod",
    outputs: [
      {
        internalType: "uint256",
        name: "productIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "productCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productRating",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "productOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

module.exports = RewardMarketAbi;
