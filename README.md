# pointRewardDapp

cd libs => cd rewardMarket-api => npm i
cd libs => cd test-api => npm i
test-api => npm run start

addProductManager를 사용해서 데이터 일괄처리 혹은 addProduct,addCustomer,addCompany 로 데이터 추가

buyProduct(string calldata _paymentMethods ,uint _productIndex, uint _buyAmount)paymentMethod 변수는 cash || points  _productIndex = product구조체의 productIdx
