import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import SearchBar from '../SearchBar'

const AdminLayout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'> 
        <Sidebar/>

        <div className='flex-1'>
        <SearchBar/>
        <div className='p-4 '> { <Outlet/>} </div>
        </div>
        
      
    </div>
  )
}

export default AdminLayout
