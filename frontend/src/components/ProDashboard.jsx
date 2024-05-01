import React from 'react'
import AdminStats from './AdminStats'
import TransactionChart from './TransactionChart'
import UserProfileChart from './UserProfileChart'
import Transactions from './Transactions'

const ProDashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
    <AdminStats/>

    <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <UserProfileChart/>
    </div>

    <div className='flex flex-row gap-4 w-full'>
      <Transactions/>
    </div>

  </div>
  )
}

export default ProDashboard
