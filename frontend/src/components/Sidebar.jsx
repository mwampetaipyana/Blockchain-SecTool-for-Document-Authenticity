import React from 'react'
import { Link } from 'react-router-dom'
import { TbBusinessplan } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <Link to="/" className="flex justify-start items-center text-xl text-white space-x-1">
        <span>SecTool</span>
        <TbBusinessplan />
      </Link> 
            <ul className="space-y-2">
                <li>
                    <a href="#dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#upload-documents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                        Upload Documents
                    </a>
                </li>
                <li>
                    <a href="#history" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                        History
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar
