import React from 'react'
import Sidebar from '../Sidebar'
import SearchBar from '../SearchBar'

const Admin = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar/>
      <div className='flex-1'> <SearchBar/> </div>
     
    </div>
    
  )
}

export default Admin
