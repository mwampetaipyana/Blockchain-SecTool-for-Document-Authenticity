import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { TbBusinessplan } from 'react-icons/tb'
import Modal from "react-modal";


const Header = () => {

  const [file, setFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    // We will fill this out later
  };
  return (
    <header className='flex justify-between items-center p-5 bg-[#083344] shadow-lg fixed top-0 left-0 right-0 md:pl-39'>
      <Link to="/" className="flex justify-between items-center text-xl text-white space-x-1">
        <span>SecTool</span>
        <TbBusinessplan />
      </Link>


      <div className="flex space-x-2 justify-center no-underline">
        <button
          type="button"
          onClick={() => setModalIsOpen(true)}
          to="verify"
          element
          className=" inline-block px-6 py-2.5 bg-[#fb8500] no-underline text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#2C74B3]"
        >
          VERIFY DOCUMENT
        </button>
        
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="File Uploader Modal"
        className={`className=" p-4 flex justify-center items-center opacity-90 h-screen bg-gray-50"`}
      >
        <div className="flex flex-col justify-center items-center h-3/4 w-3/4 bg-gray-100" >
          <label htmlFor="file" className="sr-only">
            Choose a file
          </label>
          <input className="flex justify-between items-center w-3/4
        bg-gray-300 rounded-xl mt-5 p-2" id="file" type="file" accept='.pdf' onChange={handleFileChange} />

        {file && (
          <section>
            File details:
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
        )}
        {file && <button className="inline-block px-6 py-2.5 bg-[#2C74B3]
          text-white font-medium text-md leading-tight
          rounded-full shadow-md hover:bg-blue-600 mt-5" onClick={handleUpload}>Upload a file</button>}
        <button 
        className="inline-block px-6 py-2.5 bg-red-500
        text-white font-medium text-md leading-tight
        rounded-full shadow-md hover:bg-red-700 mt-5" onClick={() => setModalIsOpen(false)}>Close</button>

        </div>
      </Modal>
       
       

        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#fb8500] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#2C74B3]"
          // onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;
