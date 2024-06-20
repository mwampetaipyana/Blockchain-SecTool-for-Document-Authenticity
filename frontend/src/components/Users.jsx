import React, { useState, useEffect } from "react";
import { getOrderStatus } from './utils'
import { viewPROs } from "../services/blockchain";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await viewPROs();
                if (Array.isArray(fetchedUsers)) {
                    setUsers(fetchedUsers);
                } 
            } catch (error) {
                console.error("Error fetching users:", error);
                setUsers([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-medium'>Recent Orders</strong>
            <div className='mt-3'>
                <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Wallet Address</td>
                            <td>Organization</td>
                            <td>Location</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((txn, index) => (
                            <tr key={index}>
                                <td>{txn.fname}</td>
                                <td>{txn.lname}</td>
                                <td>{txn.proAddress}</td>
                                <td className="uppercase">{txn.organization}</td>
                                <td className="uppercase">{txn.location}</td>
                                <td className="uppercase">{txn.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
