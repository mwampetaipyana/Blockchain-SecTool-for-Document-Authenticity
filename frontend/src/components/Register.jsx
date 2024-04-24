import React from 'react'
import Sidebar from './Sidebar'
import SearchBar from './SearchBar'


const Register = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
          <Sidebar/>
        <div className='flex-1'> 
            <SearchBar/> 
            <div   className={`fixed top-0 left-0 w-screen h-screen flex
              items-center justify-center bg-black bg-opacity-50
                transform transition-transform duration-300 `}>
              <div className="bg-white shadow-xl shadow-black
                  rounded-xl w-11/12 md:w-2/5 h-7/12 p-6 ">
              <form  className="flex flex-col  p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add Project</p>
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="cost"
              placeholder="cost (ETH)"
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="date"
              name="date"
              placeholder="Expires"
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="url"
              name="imageURL"
              placeholder="Image URL"
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <textarea
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="text"
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-[#023047]
            text-white font-medium text-md leading-tight
            rounded-full shadow-md hover:bg-[#fb8500] mt-5"
          >
            Submit Project
          </button>
        </form>
              </div>
          
      </div>
            </div>
        </div>
  )
}

export default Register
