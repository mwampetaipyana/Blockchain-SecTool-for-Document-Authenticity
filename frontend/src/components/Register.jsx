
import React, { useState }  from "react";
import { toast } from 'react-toastify'
import { addPro } from "../services/blockchain";

const Register = () => {

  const[fname, setFname] = useState('')
  const[lname, setLname] = useState('') 
  const [address, setAddress] = useState('')
  const [organizaion, setOrganization] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!fname || !lname || !address || !organizaion || ! location) return 

    const params = {
      fname,
      lname,
      address,
      organizaion,
      location
    }

    await addPro(params)
    toast.success('User added Successfully, will reflect in 30sec.')
    reset()
  }

  const reset = () => {
    setFname('')
    setLname('')
    setAddress('')
    setOrganization('')
    setLocation('')
  }



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        action=""
        className="max-w-lg w-full h-3/4 p-5 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-center text-3xl font-bold mb-5">Register</h1>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              type="text"
              placeholder="Wallet Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              type="text"
              placeholder="Organization"
              onChange={(e) => setOrganization(e.target.value)}
              value={organizaion}
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="w-full focus:outline-none"
              required
            />
          </div>
        </div>

        <div className=" mt-4 pt-4">
          <button type="submit" className="w-full bg-[#2C74B3] hover:bg-[#083344] text-white py-2 px-4 rounded-lg mb-4">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
