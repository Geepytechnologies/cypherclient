import React from 'react'
import {FaStore} from 'react-icons/fa'
import {BsArrowLeftRight} from 'react-icons/bs'
import {FaBlogger} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import './bottomnav.css'

export const BottomNav = () => {
  return (
    <div className='fixed bottom-0 w-[100%] bg-[#8b2980] bottomnav'>
        <div className="icons flex justify-around">
            <div className="Market flex flex-col justify-center items-center py-3">
              <FaStore className='icon'/>
              <h4>Market</h4>
            </div>
            <div className="Exchange flex flex-col justify-center items-center">
               <BsArrowLeftRight className='icon'/>
               <h4>Exchange</h4>
            </div>
            <div className="Blog flex flex-col justify-center items-center">
                <FaBlogger className='icon'/>
                <h4>Blog</h4>
            </div>
            <div className="Tutorials flex flex-col justify-center items-center">
                <FaBook className='icon'/>
                <h4>Tutorials</h4>
            </div>
        </div>
    </div>
  )
}
