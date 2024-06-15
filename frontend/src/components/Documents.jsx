import React, { useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
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

  const showEditModal = () => {
    setModalEditIsOpen(true);
  };

  const showDeleteModal = () => {
    setModalDeleteIsOpen(true);
  };

  const hideEditModal = () => {
    setModalEditIsOpen(false);
  };

  const hideDeleteModal = () => {
    setModalDeleteIsOpen(false);
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // We will fill this out later
  };

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
                  <Link to={`/customer/${txn.docCid}`}>
                    {txn.docCid}
                  </Link>
                </td>
                <td>{new Date(txn.date).toLocaleDateString()}</td>

                <td>
                  <button className="p-2">
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
                    <form className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Edit Document</p>

                        <button
                          className="inline-block px-6 py-2.5 bg-red-500 
                     text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700 mt-5"
                          onClick={hideEditModal}
                        >
                          Close
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
                          accept=".pdf"
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
          rounded-full shadow-md hover:bg-[#172554] mt-5"
                      >
                        Upload New Document
                      </button>
                    </form>
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
