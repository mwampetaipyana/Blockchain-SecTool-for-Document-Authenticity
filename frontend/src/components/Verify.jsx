import React, { useState } from "react";
import Modal from "react-modal";

const Verify = () => {
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
    <div className="bg-white">
      <div className="pt-4 bg-gray-500 w-3/4">
      <button onClick={() => setModalIsOpen(true)}>Open File Uploader</button>
        </div>




        <div className=" h-3/4 w-3/4">
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="File Uploader Modal"
      >
        <div >
          <label htmlFor="file" className="sr-only">
            Choose a file
          </label>
          <input id="file" type="file" onChange={handleFileChange} />
        </div>
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
        {file && <button onClick={handleUpload}>Upload a file</button>}
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
        </div>

     
   
        
      </div>
      
    
  );
};

export default Verify;
