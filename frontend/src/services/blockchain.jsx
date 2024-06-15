import abi from "../contracts/SecTool.json";
import address from "../contracts/contractAddress.json";
import { getGlobalState, setGlobalState } from "../store";

import { ethers } from "ethers";

//const INFURA_API_KEY = process.env.INFURA_API_KEY;
const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;
let tx;

const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
  } catch (error) {
    reportError(error);
  }
};

const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    return contract;
  } else {
    return getGlobalState("contract");
  }
};

const addPro = async ({ fname, lname, proAddress, organizaion, location }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const contract = await getEtheriumContract();
     tx = await contract.add_Pro(
      fname,
      lname,
      proAddress,
      organizaion,
      location
    );
    await tx.wait();
  } catch (error) {
    console.log(error);
  }
};

const storeDocument = async ({ docID, title, description, ipfs_hash }) => {
  try {
    if (!ethereum) return alert("Please Install Metamask");

    const contract = await getEtheriumContract();
     tx = await contract.storeDocument(docID, title, description, ipfs_hash);
    await tx.wait();
  } catch (error) {
    console.log(error);
  }
};

const verifyDocument = async ({ipfs_hash}) => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
     tx = await contract.verifyDocument(ipfs_hash);
     await tx.wait();
  } catch (error) {
    console.log(error);
  }
}

const editDocument = async ({ docID, newTitle, newDescription, newIpfsHash}) => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.editDocument(docID,newTitle,newDescription,newIpfsHash);
    await tx.wait();
  } catch(error) {
    console.log(error)
  }
}

const deleteDocument = async ({docID}) => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.deleteDoc(docID);
    await tx.wait();
  } catch (error) {
    console.log(error)
  }
}

const viewPRODocuments = async ({proAddress}) => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.viewPRODocuments(proAddress);
    await tx.wait();
  } catch (error) {
    console.log(error)
  }
}

const getProTransactions = async ({proAddress}) => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.getProTransactions(proAddress);
    await tx.wait();
  } catch (error) {
    
  }
}
const getAllTxns = async () => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.getAllTxns();
    await tx.wait();
  } catch (error) {
    console.log(error);
  }
}

const viewPROs = async () => {
  try {
    if(!ethereum) return alert ("Please Install Metamask");
    const contract = await getEtheriumContract();
    tx = await contract.viewPROs();
  } catch (error) {
    console.log(error)
  }
}
export {
  getProvider,
  connectWallet,
  addPro,
  storeDocument,
  getEtheriumContract,
  verifyDocument,
  editDocument,
  deleteDocument,
  viewPRODocuments,
  getProTransactions,
  getAllTxns,
  viewPROs
};
