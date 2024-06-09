import abi from '../contracts/SecTool.json'
import address from '../contracts/contractAddress.json'
import { getGlobalState, setGlobalState } from '../store'

import {ethers} from 'ethers'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi

const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    } catch (error) {
      reportError(error)
    }
  }

  export {
    connectWallet
  }