 //SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract RewardMarket
{
    address customerS;

    struct company{
        address companyAddress;
        string companyName;
        uint companyBalance; 
        uint rewardPoints;
        uint companyId;
    }

    struct customer{
        address customerAddress;
        string customerName;
        uint customerId;
        uint customerBalance;
        uint rewardPoints;
    }

    struct product{ 
        uint productIdx;
        uint productId;
        
        string productName;
        uint productCost;
        uint productRating; 
        uint productAmount;
        address productOwner;
    }  



    mapping(address => company) public comp;
    mapping(address => customer) public cust;
    mapping(uint256 => product) public prod;
    uint productId;
    uint productIdx;
    event info(uint8 no, string content);
    event purchase(string CustomerName, string ProductName,uint ProductAmount, uint BuyAmount ,string PaymentMethods ,uint CustomerAsset,uint RequireAsset, uint RewardPoints);

    constructor(){
            customerS=msg.sender;
            productIdx = 0;
            productId = 100000;
        }


    function addCompany(address _companyAddress, string calldata _companyName, uint _companyBalance , uint _rewardPoints ,uint _companyId) public{
        comp[_companyAddress]=company(_companyAddress,_companyName,_companyBalance,_rewardPoints,_companyId);
        
    } 

    function addCustomer(address _customerAddress, string calldata _customerName, uint _customerId,uint _customerBalance,uint _rewardPoints )public{
        cust[_customerAddress]=customer(_customerAddress,_customerName,_customerId,_customerBalance,_rewardPoints);
    }


    function addProduct(string calldata _productName , uint _productCost , uint _productRating , uint _productAmount , address _productOwner)public{
        prod[productIdx]=product(productIdx, productId, _productName, _productCost,_productRating,_productAmount,_productOwner);
        productId++;
    }


    function getAllProductsEnable() public view returns(string[] memory){
        string[] memory _result = new string[](productIdx-1);
        for (uint256 i = 0; i < productIdx-1 ; i++){
                if(prod[i].productAmount>0){
                    _result[i] = prod[i].productName;
                }
            }
        return _result;
    }

    function getComp(address _compAddress) public view returns(company memory _result){
        //_result = comp[0x5f48C50B1A516Eb5000fd5f0Add6116c405c1031];
        _result = comp[_compAddress];
        return _result;
    }

     function getCust(address _custAddress) public view returns(customer memory _result){
        //_result = cust[0x49b32186A2612AFdb2244c996e2384389C5eC605];
        _result = cust[_custAddress];
        return _result;
    }

     function getProd(uint _productId) public view returns(product memory _result){
        //_result = prod[0];
        _result = prod[_productId];
        return _result;
    }


    function buyProduct(string calldata _paymentMethods ,uint _productIndex, uint _buyAmount) public returns(string memory){
        string memory message;
        uint _prodAmount =  prod[_productIndex].productAmount; 
        uint _prodCost =  prod[_productIndex].productCost; 
        uint _prodRating =  prod[_productIndex].productRating; 
        address _companyAddress = prod[_productIndex].productOwner;
        uint _asset;
        uint _requireAsset;
        uint _rewardPoints = 0;
        
        require(_prodAmount >= _buyAmount, "Not enough stock. Please reduce the purchase quantity."); //수량비교 구매수량보다 보유수량이 많아야함
           
        if(keccak256(abi.encodePacked(_paymentMethods)) == keccak256(abi.encodePacked("cash"))){ //지불 수단에 따른 결제방식 상이
            _asset = cust[msg.sender].customerBalance;
            _requireAsset = _buyAmount*_prodCost;
            if(_asset >= _requireAsset){ //보유 자산이 총지불량보다 많아야함

                cust[msg.sender].customerBalance = _asset - _requireAsset;
                comp[_companyAddress].companyBalance += _requireAsset;
                cust[msg.sender].rewardPoints += (_requireAsset/  _prodRating); //포인트 적립

                message = "Transaction Successful";
                emit purchase(cust[msg.sender].customerName,prod[_productIndex].productName, _prodAmount ,  _buyAmount ,  "cash" ,  _asset ,  _requireAsset , _rewardPoints); //stack to deep _paymentMethods 제거
            } 
            else{
                message = "InSufficient Balance";
            }

        }else if(keccak256(abi.encodePacked(_paymentMethods)) == "points"){

            _asset = cust[msg.sender].rewardPoints;
            _requireAsset = _buyAmount*_prodCost;

            if(_asset >= _requireAsset){
                cust[msg.sender].rewardPoints = _asset - _requireAsset;
                comp[_companyAddress].rewardPoints += _requireAsset;

                message = "Transaction Successful";
                emit purchase(cust[msg.sender].customerName,prod[_productIndex].productName, _prodAmount ,  _buyAmount ,  "points" ,  _asset ,  _requireAsset , _rewardPoints); //stack to deep _paymentMethods 제거
            } //보유 자산이 총지불량보다 많아야함
            else{
                message = "InSufficient Balance ";
            }
        }
        
        return (message);
        
    }


    function addProductManager() public {
        comp[0xe145827B9a08CFA23b7d01C25253875CeDBe8c01]=company(0xe145827B9a08CFA23b7d01C25253875CeDBe8c01,"GS25",0,0,1000);
        comp[0x1209B97306549fb4EF75308B103fd85f9DD3a8b9]=company(0x1209B97306549fb4EF75308B103fd85f9DD3a8b9,"HomePlus",0,0,1001);
        comp[0x7Ec5503121b7357cF882e94D11813F7E79884e04]=company(0x7Ec5503121b7357cF882e94D11813F7E79884e04,"CGV",0,0,1002);
        cust[0x3f1C35226434B0Ee81C06cc0e6941B6414C5cDfe]=customer(0x3f1C35226434B0Ee81C06cc0e6941B6414C5cDfe,"Lee",2425500,100000,0);
        prod[0]=product(0,100000, "CupNoodle", 1200,50,10,0xe145827B9a08CFA23b7d01C25253875CeDBe8c01);
        prod[1]=product(1,100001, "Gimbap", 800,35,20,0xe145827B9a08CFA23b7d01C25253875CeDBe8c01);
        prod[2]=product(2,100002, "PaperTowel", 8000,38,5,0x1209B97306549fb4EF75308B103fd85f9DD3a8b9);
        prod[3]=product(3,100003, "Shampoo", 6200,27,15,0x1209B97306549fb4EF75308B103fd85f9DD3a8b9);
        prod[4]=product(4,100004, "MovieTicket", 8000,70,45,0x7Ec5503121b7357cF882e94D11813F7E79884e04);
        prod[5]=product(5,100005, "PopCorn", 4000,55,50,0x7Ec5503121b7357cF882e94D11813F7E79884e04);
        productIdx = 6;
        productId = 100006;
    }


}
