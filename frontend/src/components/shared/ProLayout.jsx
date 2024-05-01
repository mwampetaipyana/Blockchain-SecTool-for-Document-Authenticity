import React from 'react'
import ProSidebar from '../ProSidebar'
import SearchBar from '../SearchBar'
import { Outlet } from 'react-router-dom'
const ProLayout = () => {
  return (
    <div className='flex flex-row bg-neutral-100  h-screen w-screen overflow-hidden'> 
            <ProSidebar/>
        <div className='flex-1'>
            <SearchBar/>
            <div className='p-4'> { <Outlet/>} </div>
        </div>
       
    
    </div>
  )
}

export default ProLayout
