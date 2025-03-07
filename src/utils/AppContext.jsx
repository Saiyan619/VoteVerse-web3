import React from 'react'
import { useContext, createContext, useState } from 'react'
import { BrowserProvider, ethers } from "ethers"; // ✅ Correct import for v6
import { contractAbi, contractAddress } from "../Constant/constant";


const appContext = createContext()
export const useAppContext = () => useContext(appContext)

const AppContext = ({children}) => {
    //   const [loader, setLoader] = useState(false)
      const [provider, setProvider] = useState(null);
      const [account, setAccount] = useState(null);
      const [connected, setConnected] = useState(false);
      const [votingStatus, setVotingStatus] = useState(true)
      const [remainingTime, setRemainingTime] = useState('')
      const [candidates, setCandidates] = useState([])
      const [number, setNumber] = useState('')
    const [CanVote, setcanVote] = useState(true)
    

    // const postNotify = () => toast.success('House posted successfully');
    // const postNotifyError = () => toast.error('Error, Something went wrong!!, Fill out the inputs Correctly');
    
       const canVote = async () => {
         const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
         await window.ethereum.request({ method: "eth_requestAccounts" });
          const signer = await provider.getSigner();
      
          const contractInstance = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
         const voteStatus = await contractInstance.voters(await signer.getAddress())
         console.log(voteStatus)
         setcanVote(voteStatus)
       }
       // console.log(CanVote)
     
     
       const voteYes = async () => {
         const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
         await window.ethereum.request({ method: "eth_requestAccounts" });
          const signer = await provider.getSigner();
      
          const contractInstance = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
         
         const tx = await contractInstance.vote(0)
         await tx.wait();
         canVote()
         console.log('tx completed')
       }
     
    const voteNo = async () => {
         const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
         await window.ethereum.request({ method: "eth_requestAccounts" });
          const signer = await provider.getSigner();
      
          const contractInstance = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
         
         const tx = await contractInstance.vote(1)
         await tx.wait();
         canVote()
         console.log('tx completed')
       }
     
       const getCandidates = async () => {
         try {
           if (!window.ethereum) {
             console.log("MetaMask is not installed");
             return;
           }
       
           const provider = new BrowserProvider(window.ethereum);
           await window.ethereum.request({ method: "eth_requestAccounts" });
       
           const signer = await provider.getSigner();
           const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
       
           const candidatesList = await contractInstance.getAllVotesOfCandiates();
           const formattedCandidates = candidatesList.map((candidate, index) => {
             return {
               index: index,
               name: candidate.name,
               voteCount: candidate.voteCount.toString() // Convert BigInt to string
             }
           })
           console.log("formattedCandidates List:", formattedCandidates);
           setCandidates(formattedCandidates)
     
         } catch (error) {
           console.error("Error fetching candidates:", error);
         }
       };
     
       const getCurrentStatus = async () => {
         const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
        await window.ethereum.request({ method: "eth_requestAccounts" });
         const signer = await provider.getSigner();
     
         const contractInstance = new ethers.Contract(
           contractAddress,
           contractAbi,
           signer
         );
     
         const status = await contractInstance.getVotingStatus()
         console.log(status)
     
         setVotingStatus(status)
       }
     
       const getRemainingTime = async () => {
         const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
         await window.ethereum.request({ method: "eth_requestAccounts" });
          const signer = await provider.getSigner();
      
          const contractInstance = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
         
         const time = await contractInstance.getRemainingTime();
         setRemainingTime(parseInt(time, 16))
       }
       
     
       const connectToMetamask = async () => {
         if (window.ethereum) {
           try {
             const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider instead of Web3Provider
             setProvider(provider);
     
             const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
             const signer = await provider.getSigner();
     
             const adddress = await signer.getAddress()
               console.log("✅ MetaMask Address:", accounts[0]);
               getCandidates()
             setAccount(accounts[0]);
             setConnected(true);
             canVote()
             
           } catch (error) {
             console.error("Error connecting to MetaMask:", error);
           }
         } else {
           console.log("Please install MetaMask");
         }
       };
     
       const handleAccountChange = (acc) => {
       if (acc.length === 0 && account !== acc[0]) {
         setAccount(acc[0])
         canVote()
       } else {
         setConnected(false)
         setAccount(null)
       }
     }
    

    const value = {
        // postNotify,
        // postNotifyError,
        // setLoader,
        // loader
        candidates,
        CanVote,
        account,
        remainingTime,
        canVote,
        setAccount,
        getCandidates,
        connectToMetamask,
        getRemainingTime,
        voteYes,
        voteNo
    }
    return <appContext.Provider value={value}>{children}</appContext.Provider>;

}

export default AppContext