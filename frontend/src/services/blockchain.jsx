import abi from "../contracts/SecTool.json";
import { getGlobalState, setGlobalState } from "./store";
import { ethers } from "ethers";
import { notifyError } from "./notificationServices";

const { ethereum } = window;
const contractAddress = "0xC1c1834f192C7DCD8f5FB6aBf121D06F5e6C867B";
const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;
const contractAbi = abi.abi;
let tx;

const setObjectState = (state, value) => {
  localStorage.setItem(state, JSON.stringify(value));
};

const getObjectState = (state) => {
  return JSON.parse(localStorage.getItem(state));
};

const setState = (state, value) => {
  localStorage.setItem(state, value);
};

const getState = (state) => {
  return localStorage.getItem(state);
};

const resetState = (state) => {
  localStorage.removeItem(state);
};

const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    setGlobalState("contract", contract);
  } catch (error) {
    console.error(error);
  }
};

const getSignerContract = async () => {
  let provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return { signer, contract };
};

const getViewerContract = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/${INFURA_API_KEY}`
  );
  //let provider = getProvider()
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return { contract };
};

const addPro = async ({ fname, lname, proAddress, organizaion, location }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getSignerContract();
    if (contract) {
      tx = await contract.add_Pro(
        fname,
        lname,
        proAddress,
        organizaion,
        location
      );
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const storeDocument = async ({ docID, title, timestamp, cid, description }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getSignerContract();
    console.log(docID);
    console.log(title);

    console.log(timestamp);

    console.log(cid);
    console.log(description);

    if (contract) {
      tx = await contract.storeDocument(
        docID,
        title,
        description,
        parseInt(timestamp),
        cid
      );
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyDocument = async ({ ipfs_hash }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getSignerContract();
    if (contract) {
      tx = await contract.verifyDocument(ipfs_hash);
      return tx
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const editDocument = async ({ docID, title, description, cid }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getSignerContract();
    if (contract) {
      tx = await contract.editDocument(docID, title, description, cid);
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteDocument = async ({ docID }) => {
  console.log(docID);
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getSignerContract();
    if (contract) {
      tx = await contract.deleteDoc(docID);
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const viewPRODocuments = async () => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { signer, contract } = await getSignerContract();
    if (contract) {
      tx = await contract.viewPRODocuments(signer.getAddress());
      console.log(tx);
      return tx;
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const getProTransactions = async ({ proAddress }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getViewerContract();
    if (contract) {
      tx = await contract.getProTransactions(proAddress);
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllTxns = async () => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getViewerContract();
    if (contract) {
      tx = await contract.getAllTxns();
      await tx.wait();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

const viewPROs = async () => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const { contract } = await getViewerContract();
    if (contract) {
      tx = await contract.viewPROs();
    } else {
      console.error("Contract is not initialized.");
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  setObjectState,
  getObjectState,
  setState,
  getState,
  resetState,
  getProvider,
  connectWallet,
  addPro,
  storeDocument,
  verifyDocument,
  editDocument,
  getSignerContract,
  getViewerContract,
  deleteDocument,
  viewPRODocuments,
  getProTransactions,
  getAllTxns,
  viewPROs,
};
