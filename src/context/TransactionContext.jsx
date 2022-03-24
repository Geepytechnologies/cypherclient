import React, {useState, useEffect} from "react";
import { ethers }  from 'ethers';
import { contractAbi, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext('');

const {ethereum} = window;

const createEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractAbi, signer);

    return transactionContract;

}

export const TransationProvider =({children})=>{
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressto: '',amount:'',keyword:'',message:''});
    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChange = (e)=>{
        const name = e.target.name
        setFormData( prevState => {return {...prevState, [name]: e.target.value}})
    }

    const checkIfWalletIsConnected = async ()=>{
     try{
        if(!ethereum) return alert('Please Install Metamask');
        const accounts = await ethereum.request({method: 'eth_accounts'});

        if(accounts.length) {
            setCurrentAccount(accounts[0]);

            //get all transactions
        }else{
            console.log('No accounts found')
        }
      }catch(error){
        console.log(error)
        throw new Error('No ethereum Object')
      }
    }
    
    const connectWallet = async ()=>{
      try{
          if(!ethereum) return alert('Please Install metamask');
          const accounts = await ethereum.request({method: 'eth_requestAccounts'});

          setCurrentAccount(accounts[0]);
      }catch(error){
          console.log(error)
          throw new Error('No ethereum Object')
      }
    }
    
    const sendTransaction = async ()=>{
        try {
            if(ethereum){
            // get data from the form  
            const {addressto, amount, keyword, message} = formData;
            const parsedAmount = ethers.utils.parseEther(amount)
            const transactionContract = createEthereumContract();
            // console.log(transactionContract)
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressto,
                    gas: '0x5208', //21000 gwei
                    value: parsedAmount._hex
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressto, parsedAmount, message, keyword);
            setIsLoading(true);
            console.log(`loading-${transactionHash.hash}`);
            setIsLoading(false);
            console.log(`success-${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
            console.log(setTransactionCount)
        }else{
            console.log("No ethereum object");
        }
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(()=>{
       checkIfWalletIsConnected();
    },[])
    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction}}>
           {children}
        </TransactionContext.Provider>
    )
}