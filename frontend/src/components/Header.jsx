import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSignerContract, getViewerContract } from "../services/blockchain";
import { TbBusinessplan } from "react-icons/tb";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { notifyError } from "../services/notificationServices";
import { useNavigate } from "react-router-dom";
import { verifyDocument } from "../services/blockchain";
import { addFile } from "../services/PinataServices";

const Header = () => {
  const [file, setFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isValid, setIsVerified] = useState(null);
  const [isLoading, setIsLoading] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    console.log("hey there");
    if (!window.ethereum.isMetaMask) {
      notifyError("Install metamask!");
      return;
    }
    const { contract } = await getViewerContract();
    const { signer } = await getSignerContract();
    const signerAddress = await signer.getAddress();
    const userType = await contract.login(signerAddress);

    if (userType[2] === "admin") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else if (userType[2] === "pro") {
      localStorage.setItem("role", "pro");
      navigate("/pro");
    } else notifyError("Unauthorized User!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;
    setIsLoading(true); // Start loading
    try {
      const ipfs_hash = await addFile("filename", file);
      console.log(`The CID: ${ipfs_hash}`);

      let document = await verifyDocument({ ipfs_hash });
      console.log("Document response:", document);
      setIsLoading(false);

      if (document === true) {
        setIsVerified(true);
      } else if (document === false) {
        setIsVerified(false);
      } else {
        setIsVerified(false);
      }

      toast.success("Wait for confirmation, will reflect in 30 seconds.");
      reset();
    } catch (error) {
      toast.error("An error occurred while verifying the document.");
      console.error(error);
      setIsVerified(false);
    }
  };

  const reset = () => {
    setFile(null);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-[#083344] shadow-lg fixed top-0 left-0 right-0 md:pl-39">
      <Link
        to="/"
        className="flex justify-between items-center text-xl text-white space-x-1"
      >
        <span>SecTool</span>
        <TbBusinessplan />
      </Link>

      <div className="flex space-x-2 justify-center no-underline">
        <button
          type="button"
          onClick={() => setModalIsOpen(true)}
          className="inline-block px-6 py-2.5 bg-[#fb8500] no-underline text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#2C74B3]"
        >
          VERIFY DOCUMENT
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="File Uploader Modal"
          className="p-4 flex justify-center items-center opacity-100 h-screen bg-white-300"
        >
          <div className="flex flex-col justify-center items-center h-3/4 w-3/4 bg-gray-100">
            <form onSubmit={handleSubmit}>
              <label htmlFor="file" className="sr-only">
                Choose a file
              </label>
              <input
                className="flex justify-between items-center w-3/4 bg-gray-300 rounded-xl mt-5 p-2"
                id="file"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />

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
              {file && (
                <button
                  className="inline-block px-6 py-2.5 bg-[#2C74B3] text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-blue-600 mt-5"
                  type="submit"
                >
                  Verify Document
                </button>
                
              )}

              {isLoading ? (
                <div>
                  <img src='https://loading.io/asset/745158' alt="Loading..." />
                </div>
              ) : (
                <>
                  {isValid === true && (
                    <div className="mt-4 flex items-center space-x-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                        alt="Tick"
                        className="w-6 h-6"
                      />
                      <p className="text-green-600 font-semibold">
                        Document is valid
                      </p>

                      
                    </div>
                  )}
                  {isValid === false && (
                    <div className="mt-4 flex items-center space-x-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                        alt="Times"
                        className="w-6 h-6"
                      />
                      <p className="text-red-600 font-semibold">
                        Document is invalid
                      </p>
                      <div>
                  
                </div>
                    </div>
                  )}
                </>
              )}

              <button
                className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700 mt-5"
                onClick={() => {
                  setModalIsOpen(false);
                  setIsVerified(null);
                }}
                type="button"
              >
                Close
              </button>
            </form>
          </div>
        </Modal>

        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#fb8500] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#2C74B3]"
          onClick={login}
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
