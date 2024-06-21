import React, { useState, useEffect, useRef } from 'react';
import { getProTransactions } from '../services/blockchain';
import { ethers } from 'ethers';

const ProTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const tableRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTxns = await getProTransactions();
        setTransactions(fetchedTxns || []);
      } catch (error) {
        console.error("Error fetching Transactions:", error);
        setTransactions([]);
      }
    };
    fetchData();
  }, []);

  const getDate = (timestampInBigNumber) => {
    const timestampInSeconds = ethers.BigNumber.from(timestampInBigNumber).toString();
    const timestampInMs = parseFloat(timestampInSeconds) * 1000;
    return new Date(timestampInMs).toLocaleDateString();
  };

  const printTable = () => {
    const printContents = tableRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload the page to restore the original content
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-bold">Recent Transactions</strong>
      <div className="mt-3">
        <div className="flex justify-end mb-3">
          <button onClick={printTable} className="p-2 bg-blue-500 text-white rounded">Print</button>
        </div>
        <div ref={tableRef}>
          <table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
            <thead>
              <tr>
                <td>Transaction Type</td>
                <td>Address</td>
                <td>Transaction Date</td>
                <td>Transaction Status</td>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index}>
                  <td>{txn.transactionType}</td>
                  <td>{txn.userAddress}</td>
                  <td>{getDate(txn.timestamp)}</td>
                  <td className='text-green-600'>{txn.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProTransactions;
