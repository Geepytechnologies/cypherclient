import React, { useContext } from 'react'
import Loader from './Loader';
import {FaEthereum} from 'react-icons/fa'
import { TransactionContext } from '../context/TransactionContext';
// import spiral from '../spirals.png'


const Input = ({placeholder, name, type, handleChange, value})=>(
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={handleChange}
    name={name}
    className='my-2 w-full rounded-sm p-2 outline-none border-none'
  />
);

const Welcome = () => {
  
  const {connectWallet, currentAccount, formData, handleChange, sendTransaction} = useContext(TransactionContext);

  
  const handleSubmit = (e)=>{
    const {addressto, amount, keyword, message} = formData;
    if(!addressto || !amount || !keyword || !message) {
      alert('fill all fields')
    }else{
      e.preventDefault();
      sendTransaction();

    }
    
  }

  return (
    <div className='sm:flex sm:flex-row mt-5 h-[auto] justify-center items-center'>
      <div className='basis-[50%] h-[100%] relative items-center justify-center flex flex-col'>
        {/* <img src={spiral} alt="spiral" width={100} height={100} /> */}
        <div className="coin bg-[length:100%_auto] w-[350px] h-[200px]"></div>
        <div className="absolute spiral right-0"></div>
        <div className="absolute spiral left-0"></div>
        <div className='text-center h-[150px]'>
          <h1 className='text-[20px] text-[white] sm:text-[30px]'>Explore the world <br></br>of Crypto</h1>
          <h2 className='text-[white] sm:pt-[8px]'>Buy and sell cryptocurrencies easily on cypher</h2>
        </div>
        {!currentAccount && (<div className='flex justify-center w-full'>
            <button type='button' onClick={connectWallet} className='butn font-semibold mb-2 text-white rounded-full p-2 sm:w-[70%]'>Connect Wallet</button>
        </div>)}
      </div>
        {/* ethereum transaction details */}
      <div className="transaction basis-[50%]">
        <div className="wrapper">
          <div className="flex pl-[15px] items-center pb-[10px]">
            <div className="ethimage">
              <FaEthereum />
            </div>
            <div className="address text-white">Ethereum address</div>
          </div>
          {/* Transaction details section  */}
          <div className="myform justify-center items-center flex">
            <div className="formholder w-[90%] mb-4">
              <Input placeholder='Address to' name='addressto' type='text'  handleChange={handleChange} />
              <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={handleChange} />
              <Input placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={handleChange} />
              <Input placeholder='Enter Message' name='message' type='text' handleChange={handleChange} />

              {false ? (
                <Loader />
              ) : (
                <button
                type='button'
                onClick={handleSubmit}
                className='text-white mt-2 border-[1px] p-2 w-full rounded-full cursor-pointer font-semibold'
                >
                  Send Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;