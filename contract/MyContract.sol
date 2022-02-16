pragma solidity >=0.8.0;

contract testcontract{
    constructor(){

    }

    function deposit() external payable{

    }
    function withDraw(uint amount) external payable{
        require(msg.value < address(this).balance, "not enough money");
        payable(msg.sender).transfer(amount * 1 ether);
    }
    function getBalanceOf(address _address) external view returns(uint) {
        return _address.balance;
    }
}