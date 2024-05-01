import React from 'react'

const Register = () => {
  return (

<div className="flex justify-center items-center h-screen bg-gray-100">
   <form action="" className='max-w-lg w-full h-3/4 p-5 bg-white rounded-lg shadow-lg'>
          <div className="flex flex-col justify-center items-center mb-8">
            <h1 className="text-center text-3xl font-bold mb-5">Sign up</h1>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-b border-gray-200 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <input type="text" placeholder="First Name" className="w-full focus:outline-none" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-b border-gray-200 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <input type="text" placeholder="Last Name" className="w-full focus:outline-none" />
            </div>
          </div>


          <div className="mb-4">
            <div className="flex items-center border-b border-gray-200 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <input type="text" placeholder="Wallet Address" className="w-full focus:outline-none" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-b border-gray-200 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <input type="text" placeholder="Organization" className="w-full focus:outline-none" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border-b border-gray-200 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <input type="text" placeholder="Location" className="w-full focus:outline-none" />
            </div>
          </div>

          <div className=" mt-4 pt-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-4">Register</button>
          </div>
   </form> 
</div>
  )
}

export default Register
