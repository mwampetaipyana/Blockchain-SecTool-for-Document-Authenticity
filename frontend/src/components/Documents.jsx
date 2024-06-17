import React, { useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { editDocument } from "../services/blockchain";
import { toast } from "react-toastify";
import { addFile } from "../services/PinataServices";
import Modal from "react-modal";
const recentDocumentsData = [
  {
    id: "1",
    title: "VERIFICATION",
    docCid: "0xEbaE2dB0AA7feb11aa0E6ffd3C7A76c9199d7bb7",
    date: "2024-05-01T03:24:00",
  },
];
const Documents = () => {
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalViewIsOpen, setModalViewIsOpen] =useState(false);

  const[docID, setID] = useState('')
  const[title, setTitle] = useState('') 
  const [date, setDate] = useState('')
  const [file, setFile] = useState('')
  const [description, setDescription] = useState('')

  const showEditModal = () => {
    setModalEditIsOpen(true);
  };

  const showDeleteModal = () => {
    setModalDeleteIsOpen(true);
  };
  const showViewModal = () => {
    setModalViewIsOpen(true);
  };

  const hideEditModal = () => {
    setModalEditIsOpen(false);
  };

  const hideDeleteModal = () => {
    setModalDeleteIsOpen(false);
  };

  const hideViewModal = () => {
    setModalViewIsOpen(false);
  };
  
  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  let cid 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title || ! docID || !date || !file || !description) return

    cid = await addFile(title,file)
    console.log(cid)

    const params = {
      docID,
      title,
      date : toTimestamp(date),
      cid,
      description
    }

    await editDocument(params)
    toast.success('Document Uploaded Successfully, will reflect in 30sec.')
    reset()
  }

  const getFileUrl = ()=>{
    return process.env.REACT_APP_PINATA_GATEWAY + "QmQPU7oZYLivXbMBxwksdKukxcqLF5Xnfa4GjWtS52juva"
}

  const reset = () => {
    setID('')
    setTitle('')
    setDescription('')
    setFile('')
    setDate('')
  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Documents</strong>

      <div className="mt-3">
        <table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
          <thead>
            <tr>
              <td>DocID</td>
              <td>Title</td>
              <td>Document CID</td>
              <td>Transaction Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {recentDocumentsData.map((txn) => (
              <tr key={txn.sn}>
                <td>
                  <Link to={`/order/${txn.id}`}>{txn.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${txn.title}`}>{txn.title}</Link>
                </td>
                <td>
                  <Link to={`/customer/${txn.docCid}`}>{txn.docCid}</Link>
                </td>
                <td>{new Date(txn.date).toLocaleDateString()}</td>

                <td>
                  <button className="p-2" onClick={showViewModal}>
                    {" "}
                    <FaEye />{" "}
                  </button>

                  <button className="p-2" onClick={showEditModal}>
                    {" "}
                    <FaPen />
                    <div className=" h-3/4 w-3/4"></div>
                  </button>

                  <button className="p-2" onClick={showDeleteModal}>
                    {" "}
                    <FaTrash />{" "}
                  </button>
                </td>

                <Modal
                  isOpen={modalEditIsOpen}
                  hideModal={hideEditModal}
                  className={`className=" p-4 flex justify-center items-center opacity-90 h-screen bg-white-100"`}
                >
                  <div
                    className="bg-white  shadow-xl shadow-black
                      rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
                  >
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Edit Document</p>

                        <button
                          className="inline-block px-6 py-2.5 bg-red-500 
                     text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700 mt-5"
                          onClick={hideEditModal}
                        >
                         <FaTimes/>
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
                          onChange={(e) => setDate(e.target.value)}
                          value={date}
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
                          accept=".pdf"
                          name="file"
                          onChange={(e) => setFile(e.target.files[0])}
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
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                          placeholder="Description"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-[#2C74B3]
          text-white font-medium text-md leading-tight
          rounded-full shadow-md hover:bg-[#172554] mt-5"
                      >
                        Upload New Document
                      </button>
                    </form>
                  </div>
                </Modal>

                <Modal
                  isOpen={modalDeleteIsOpen}
                  hideModal={hideDeleteModal}
                  className={`className=" p-4 flex justify-center items-center opacity-90 h-screen bg-white-100"`}
                >
                  <div
                    className="bg-white flex-col shadow-xl shadow-black
                      rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"> 
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">Delete Document</p>

                      <button
                        className="inline-block px-6 py-2.5 bg-red-500 
                     text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700 mt-5"
                        onClick={hideDeleteModal}
                      >
                         <FaTimes/>
                      </button>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-xl mt-5">
                      <p className="font-bold text-xl">Are you sure?</p>
                      <small className="text-red-400 text-lg">
                        This is irreversible!
                      </small>


                    <button
                      className="inline-block px-6 py-2.5 bg-red-500
                      text-white font-medium text-md leading-tight
                      rounded-full shadow-md hover:bg-red-700 mt-5"
                    >
                      Delete Document
                    </button>
                    </div>
                  </div>
                </Modal>

               

<Modal 
  isOpen={modalViewIsOpen}
  hideModal={hideViewModal}
  className="p-4 flex justify-center items-center opacity-90 h-screen bg-white-100">
  <div className="bg-white flex-col shadow-xl shadow-black rounded-xl w-screen md:w-screen h-screen p-6">
    <div className="flex justify-between items-center mb-5">
      <p className="font-semibold">View Document</p>
      <button
        className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700 mt-5"
        onClick={hideViewModal}
      >
        <FaTimes />
      </button>
    </div>
    <iframe src={getFileUrl()} className="w-full h-[600px] border-none mb-5 aspect-w-16 aspect-h-9">
      
    </iframe>
  </div>
</Modal>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
