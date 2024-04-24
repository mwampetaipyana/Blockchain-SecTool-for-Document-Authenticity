import React from 'react'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

const Transactions = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar/>
      <div className='flex-1'> <SearchBar/> </div>
     
    </div>
  )
}

export default Transactions
