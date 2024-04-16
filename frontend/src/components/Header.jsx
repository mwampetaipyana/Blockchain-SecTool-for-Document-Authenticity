import React from 'react';
import { Link } from 'react-router-dom'
import { TbBusinessplan } from 'react-icons/tb'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-[#144272] shadow-lg fixed top-0 left-0 right-0 md:pl-39'>
      <Link to="/" className="flex justify-between items-center text-xl text-white space-x-1">
        <span>SecTool</span>
        <TbBusinessplan />
      </Link>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-[#2C74B3] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#fb8500]"
        >
          0x...2334
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#2C74B3] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#fb8500]"
          // onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;
