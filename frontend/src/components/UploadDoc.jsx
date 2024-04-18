import React from 'react'
import { FaTimes } from 'react-icons/fa'
//import { toast } from 'react-toastify'

const UploadDoc = () => {
  return (
    <div
    className={`fixed top-0 left-0 w-screen h-screen flex
  items-center justify-center bg-black bg-opacity-50
  transform transition-transform duration-300 `}
  >
    <div
      className="bg-white shadow-xl shadow-black
      rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
    >
      <form className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Upload Document</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        <div
          className="flex justify-between items-center
        bg-gray-300 rounded-xl mt-5 p-2"
        >
          <input
            className="block w-full bg-transparent
          border-0 text-sm text-slate-500 focus:outline-none
          focus:ring-0"
          placeholder='Title'
            required
          />
        </div>

        <div
          className="flex justify-between items-center
        bg-gray-300 rounded-xl mt-5 p-2"
        >
          <input
            className="block w-full bg-transparent
          border-0 text-sm text-slate-500 focus:outline-none
          focus:ring-0"
            type="date"
            name="date"
            placeholder="Date"
            required
          />
        </div>

        <div
          className="flex justify-between items-center
        bg-gray-300 rounded-xl mt-5 p-2"
        >
          <input
            className="block w-full bg-transparent
          border-0 text-sm text-slate-500 focus:outline-none
          focus:ring-0"
            type="file"
            accept='.pdf'
            name="file"
            placeholder="Choose file"
            required
          />
        </div>

        <div
          className="flex justify-between items-center
        bg-gray-300 rounded-xl mt-5 p-5"
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
          className="inline-block px-6 py-2.5 bg-[#2C74B3]
          text-white font-medium text-md leading-tight
          rounded-full shadow-md hover:bg-[#fb8500] mt-5"
        >
          Submit Project
        </button>
      </form>
    </div>
  </div>
  )
}

export default UploadDoc