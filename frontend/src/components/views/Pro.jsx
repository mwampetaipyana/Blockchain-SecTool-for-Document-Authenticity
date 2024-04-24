import React from 'react'
import SearchBar from '../SearchBar'
import ProSidebar from '../ProSidebar'


const Pro = () => {
  return (
    <div>
       <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <ProSidebar/>
      <div className='flex-1'> <SearchBar/> </div>
     
    </div>
    
    </div>
  )
}

export default Pro
