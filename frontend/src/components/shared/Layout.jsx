import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div> 
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>Sidebar</div>
        <div>Header</div>
        <div> { <Outlet/>} </div>
      
    </div>
  )
}

export default Layout
