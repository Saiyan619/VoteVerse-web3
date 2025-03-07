import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../utils/AppContext';

function Navbar() {

    const { setAccount, account, connectToMetamask } = useAppContext()
    const truncateText = (text, maxLength = 15) => {
        return text?.length > maxLength ? text?.substring(0, maxLength) + "..." : text;
      };
      
      const WalletAddress = account
      const truncated = truncateText(WalletAddress, 7);


  return (
    <nav className='p-2'>
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="font-bold text-xl ml-1">VoteVerse</span>
        </Link>

        <div className=" hidden md:flex items-center space-x-8">
            <Link
              to='/'
              className='font-medium'
            >
              Home
                  </Link>
                  
                  <Link
              to='/proposal'
              className='font-medium'
            >
              Proposal
            </Link>
        </div>

              <div>
                  <button onClick={connectToMetamask} className='btn btn-primary rounded-full'>{account ? truncated :"Connect Wallet"}</button>
              </div>

      </div>
    </nav>
  );
}

export default Navbar;
