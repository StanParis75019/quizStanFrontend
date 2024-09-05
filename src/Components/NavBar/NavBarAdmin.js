import React from 'react'
import { MdOutlineQuiz } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

const NavBarAdmin = () => {
  const Navigate = useNavigate()
  const handlelogout = () => {
    Navigate('/login')

  }
  return (
    <div className='w-1/6 bg-white p-4 shadow-md' >
        <div className='flex flex-col space-y-6 '>
            <div className='text-gray-500 text-xl'>
                Dashboard

            </div>
           <div className='space-y-4'>
            <div className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <MdOutlineQuiz></MdOutlineQuiz>
                <Link to = "/dashBoard" >
                
                <span>Statistics </span>
                </Link>
                

            </div>
            <div className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <MdOutlineQuiz></MdOutlineQuiz>
                <Link to = "/messageAdmin" >
                <span>Message</span>
                
                </Link>
                

            </div>
            <div className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <MdOutlineQuiz></MdOutlineQuiz>
                <Link to = '/admins'>
                <span>Admins</span>                
                </Link>
                

            </div>
            <div className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <MdOutlineQuiz></MdOutlineQuiz>
                <Link to = '/users'>
                <span>Users</span>                                
                </Link>
                

            </div>
            <div className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <MdOutlineQuiz></MdOutlineQuiz>
                <Link to = '/quiz'>
                <span>Quizs</span>                                
                </Link>
                

            </div>
            <div onClick={handlelogout} className='flex flex-row items-center text-gray-700 space-x-2 cursor-pointer'>
                <CiLogout></CiLogout>
                <span>Logout</span>
                

            </div>


           </div>
        </div>
    </div>
  )
}

export default NavBarAdmin