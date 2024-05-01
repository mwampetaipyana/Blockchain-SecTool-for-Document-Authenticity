import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from './utils'

const recentOrderData = [
	{
		sn: '1',
		txn_type: 'VERIFICATION',
		wallet_address: '0xEbaE2dB0AA7feb11aa0E6ffd3C7A76c9199d7bb7',
		date: '2024-05-01T03:24:00',
		txn_status: 'SUCCESSFUL'
	},
	

]
const Transactions = () => {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Orders</strong>
        
        <div className='mt-3'>

          <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
            <thead>
              <tr>
                <td>S/N</td>
                <td>Transaction Type</td>
                <td>Address</td>
                <td>Transaction Date</td>
                <td>Transaction Status</td>

              </tr>
            </thead>
            <tbody>
            {recentOrderData.map((txn) => (
            <tr key={txn.sn}> 
                    <td>
                      <Link to={`/order/${txn.sn}`}>{txn.sn}</Link>
                    </td>
                    <td>
                       <Link to={`/product/${txn.txn_type}`}>{txn.txn_type}</Link>
                    </td>
                    <td>
                      <Link to={`/customer/${txn.customer_id}`}>{txn.wallet_address}</Link>
                    </td>
                    <td>{new Date(txn.date).toLocaleDateString()}</td>
                    
                    <td>{getOrderStatus(txn.txn_status)}</td>

            </tr>
            ))}
            </tbody>
          </table>
        
        </div>
        
        
       
    </div>
  )
}

export default Transactions