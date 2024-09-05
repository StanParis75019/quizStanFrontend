import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin'
import { FcStatistics } from "react-icons/fc";
import { SiAlwaysdata } from "react-icons/si";
import axios from 'axios';
import {FadeLoader} from "react-spinners" 
import { ClapSpinner } from 'react-spinners-kit';
import {toast, Toaster} from 'react-hot-toast';

const DashBoard = () => {
  const [admins, setadmins] = useState([])
  const [isloading, setisloading] = useState(true)
  const [quiz, setquiz] = useState([])
  const [message, setmessage] = useState([])
  const [users, setusers] = useState([])


  const getadmins = async () => {
    setisloading (true)
    try {
      const reponse = await axios.get('http://localhost:3001/auth/getalladmins');
      setadmins(reponse.data)
      setisloading (false)
    } catch (error) {
      setisloading (false)
      toast.error('Données non reçus')
      console.log(error)
    }
  }
  const getquiz = async () => {
    setisloading(true)
    try {
      
      const reponse = await axios.get('http://localhost:3001/quiz/getallquiz');
      setquiz(reponse.data)
      setisloading(false)
    } catch (error) {
      setisloading(false)
      
    }
  }
  const getmessage = async () => {
    setisloading (true)
    try {
      const reponse = await axios.get('http://localhost:3001/message/getallmessage');
      setmessage(reponse.data)
      setisloading (false)
    } catch (error) {
      setisloading (false)
      
    }
  }
  const getusers = async () => {
    setisloading (true)
    try {
      const reponse = await axios.get('http://localhost:3001/user/getalluser');
      setusers(reponse.data)
      setisloading (false)
    } catch (error) {
      setisloading (false)
      
    }
  }
  useEffect(() => {
    getadmins()
    getquiz()
    getmessage()
    getusers()
  }, [axios] )
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
        <div className='flex flex-row h-screen'>
            <NavBarAdmin></NavBarAdmin>
            <Toaster></Toaster> 
            <div className='flex-1 p-6 overflow-scroll '>
              <div className='grid grid-cols-3 gap-6'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h2 className='text-2xl font-semibold text-gray-800'>Admins</h2>
                  <p className='text-gray-600'>Voici le nombre d'admins</p>
                  <div className='mt-4 flex flex-row items-center justify-between'>
                    <div className='text-4xl font-bold text-gray-800 '>
                    {isloading?(<ClapSpinner color="#000" size={40} ></ClapSpinner>): admins.length}
                    </div>
                    <div className='text-green-500 text-xl'>
                    <SiAlwaysdata></SiAlwaysdata>
                    </div>

                  </div>

                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h2 className='text-2xl font-semibold text-gray-800'>Quiz</h2>
                  <p className='text-gray-600'>Voici le nombre de Quiz</p>
                  <div className='mt-4 flex flex-row items-center justify-between'>
                    <div className='text-4xl font-bold text-gray-800 '>
                    {isloading?(<ClapSpinner color="#000" size={40} ></ClapSpinner>): quiz.length}
                    </div>
                    <div className='text-green-500 text-xl'>
                    <SiAlwaysdata></SiAlwaysdata>
                    </div>

                  </div>

                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h2 className='text-2xl font-semibold text-gray-800'>Users</h2>
                  <p className='text-gray-600'>Voici le nombre d'utilisateurs</p>
                  <div className='mt-4 flex flex-row items-center justify-between'>
                    <div className='text-4xl font-bold text-gray-800 '>
                    {isloading?(<ClapSpinner color="#000" size={40} ></ClapSpinner>): users.length}
                    </div>
                    <div className='text-green-500 text-xl'>
                    <SiAlwaysdata></SiAlwaysdata>
                    </div>

                  </div>

                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h2 className='text-2xl font-semibold text-gray-800'>Messages</h2>
                  <p className='text-gray-600'>Voici le nombre de messages</p>
                  <div className='mt-4 flex flex-row items-center justify-between'>
                    <div className='text-4xl font-bold text-gray-800 '>
                    {isloading?(<ClapSpinner color="#000" size={40} ></ClapSpinner>): message.length}
                    </div>
                    <div className='text-green-500 text-xl'>
                    <SiAlwaysdata></SiAlwaysdata>
                    </div>

                  </div>

                </div>

              </div>

            </div>

        </div>
    </div>
  )
}

export default DashBoard