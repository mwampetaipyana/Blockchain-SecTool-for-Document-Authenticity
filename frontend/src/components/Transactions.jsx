import React, { useState, useEffect } from "react";
import { getAllTxns } from "../services/blockchain";
import { ethers } from "ethers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]); // Properly initialize state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTxns = await getAllTxns();
        console.log(fetchedTxns);
        setTransactions(fetchedTxns);
      } catch (error) {
        console.log("Error fetching Transactions:", error);
        setTransactions([]); // Ensure state is defined even in case of error
      }
    };
    fetchData();
  }, []);

  const getDate = (timestampInBigNumber) => {
    const timestampInSeconds =
      ethers.BigNumber.from(timestampInBigNumber).toString();
    const timestampInMs = parseFloat(timestampInSeconds) * 1000;
    return new Date(timestampInMs).toLocaleDateString();
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Transactions</strong>
      <div className="mt-3">
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
            {transactions?.map((txn, index) => ( // Use optional chaining
              <tr key={index}>
                <td>{txn.transactionType}</td>
                <td>{txn.userAddress}</td>
                <td>{getDate(txn.timestamp)}</td>
                <td className="text-green-600">{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
