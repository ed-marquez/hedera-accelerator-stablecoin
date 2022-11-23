// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./TokenOwner.sol";
import "./Roles.sol";
import "./Interfaces/IPausable.sol";
import "../hts-precompile/IHederaTokenService.sol";

abstract contract Pausable is IPausable, TokenOwner, Roles {
    
    /**
     * @dev Pauses the token in order to prevent it from being involved in any kind of operation
     *
     */
    function pause() 
        external       
        onlyRole(PAUSE_ROLE)  
    {         
        int256 responseCode = IHederaTokenService(precompileAddress).pauseToken(_getTokenAddress());
        _checkResponse(responseCode); 
        
        emit TokenPaused(_getTokenAddress()); 
    }

    /**
     * @dev Unpauses the token in order to allow it to be involved in any kind of operation
     *
     */
    function unpause()
        external       
        onlyRole(PAUSE_ROLE)  
    {         
        int256 responseCode = IHederaTokenService(precompileAddress).unpauseToken(_getTokenAddress());
        _checkResponse(responseCode); 
        
        emit TokenUnpaused(_getTokenAddress()); 
    }
}