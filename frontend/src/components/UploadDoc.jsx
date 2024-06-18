import React, { useState } from "react";
import { storeDocument } from "../services/blockchain";
import { toast } from 'react-toastify'
import { addFile } from "../services/PinataServices";
//import { toast } from 'react-toastify'

const UploadDoc = () => {
  
  const[docID, setID] = useState('')
  const[title, setTitle] = useState('') 
  const [timestamp, setTimestamp] = useState('')
  const [file, setFile] = useState('')
  const [description, setDescription] = useState('')

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title || ! docID || !timestamp || !file || !description) return
    
    let cid = await addFile(title,file)
    console.log(cid)

    const params = {
      docID, 
      title,
      timestamp : toTimestamp(timestamp),
      cid,
      description
    }
    params.cid = cid;
    await storeDocument(params)
    toast.success('Document Uploaded Successfully, will reflect in 30sec.')
    reset()
  }

  const reset = () => {
    setID('')
    setTitle('')
    setDescription('')
    setFile('')
    setTimestamp('')
  }

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="bg-white h-1/2 shadow-xl shadow-black
      rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Upload Document</p>
          </div>

          <div
            className="flex justify-between items-center
        bg-gray-300 rounded-xl mt-5 p-2"
          >
            <input
              className="block w-full bg-transparent
          border-0 text-sm text-slate-500 focus:outline-none
          focus:ring-0"
              placeholder="Document ID"
              onChange={(e) => setID(e.target.value)}
              value={docID}
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
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              onChange={(e) => setTimestamp(e.target.value)}
              value={timestamp}
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
              accept=".pdf"
              name="file"
              placeholder="Choose file"
              onChange={(e) => setFile(e.target.files[0])}
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-[#2C74B3]
          text-white font-medium text-md leading-tight
          rounded-full shadow-md hover:bg-[#083344] mt-5"
          >
            Upload Document
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDoc;
