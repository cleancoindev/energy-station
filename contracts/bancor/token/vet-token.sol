pragma solidity ^0.4.24;
import "./vip180-token.sol";
import "../interfaces/vet-token.sol";
import "../utils/owned.sol";
import "../utils/token-holder.sol";

/**
    VET tokenization contract

    "Owned" is specified here for readability reasons
*/
contract VETToken is IVETToken, Owned, VIP180Token, TokenHolder {
    // triggered when the total supply is increased
    event Issuance(uint256 _amount);
    // triggered when the total supply is decreased
    event Destruction(uint256 _amount);

    /**
        @dev constructor
    */
    function VETToken()
        public
        VIP180Token("VET Token", "VET", 18) {
    }

    /**
        @dev deposit ether in the account
    */
    function deposit() public payable {
        balanceOf[msg.sender] = safeAdd(balanceOf[msg.sender], msg.value); // add the value to the account balance
        totalSupply = safeAdd(totalSupply, msg.value); // increase the total supply

        emit Issuance(msg.value);
        emit Transfer(this, msg.sender, msg.value);
    }

    /**
        @dev withdraw ether from the account

        @param _amount  amount of ether to withdraw
    */
    function withdraw(uint256 _amount) public {
        withdrawTo(msg.sender, _amount);
    }

    /**
        @dev withdraw ether from the account to a target account

        @param _to      account to receive the ether
        @param _amount  amount of ether to withdraw
    */
    function withdrawTo(address _to, uint256 _amount)
        public
        notThis(_to)
    {
        balanceOf[msg.sender] = safeSub(balanceOf[msg.sender], _amount); // deduct the amount from the account balance
        totalSupply = safeSub(totalSupply, _amount); // decrease the total supply
        _to.transfer(_amount); // send the amount to the target account

        emit Transfer(msg.sender, this, _amount);
        emit Destruction(_amount);
    }

    // ERC20 standard method overrides with some extra protection

    /**
        @dev send coins
        throws on any error rather then return a false flag to minimize user errors

        @param _to      target address
        @param _value   transfer amount

        @return true if the transfer was successful, false if it wasn't
    */
    function transfer(address _to, uint256 _value)
        public
        notThis(_to)
        returns (bool success)
    {
        assert(super.transfer(_to, _value));
        return true;
    }

    /**
        @dev an account/contract attempts to get the coins
        throws on any error rather then return a false flag to minimize user errors

        @param _from    source address
        @param _to      target address
        @param _value   transfer amount

        @return true if the transfer was successful, false if it wasn't
    */
    function transferFrom(address _from, address _to, uint256 _value)
        public
        notThis(_to)
        returns (bool success)
    {
        assert(super.transferFrom(_from, _to, _value));
        return true;
    }

    /**
        @dev deposit ether in the account
    */
    function() public payable {
        deposit();
    }
}
