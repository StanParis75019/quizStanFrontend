import React, { useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import {toast,Toaster} from 'react-hot-toast'
import { MdAlternateEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import NewNav from '../../Components/newNav'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { RotateSpinner } from 'react-spinners-kit'



const Login = () => {
  const [ Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [isloading, setisloading] = useState(false)
  const Navigate = useNavigate()
  const handleSubmit = async() => {
    setisloading(true)
    setTimeout(async() => {
      try {
        const response = await axios.post("http://localhost:3001/auth/login", {
          email: Email,
          password: Password,
        })
        toast.success('Connexion réussie!',{
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#34D36F',
            color: 'white',
          },
        });
        Navigate('/dashboard')
        setisloading(false)
      } catch (error) {
        toast.error('Connexion echouée!',{
          duration: 3000,
          position: 'top-center',
          style: {
            background: 'red',
            color: 'white',
          },
        });
        setisloading(false)
      }
    }, 3000);
    
    
    
  }
  return (
    <>
      <NewNav />
      <Toaster>

      </Toaster>
      <div className='w-full h-[100vh] mx-auto flex flex-row justify-center items-center '>
        
        <div className='w-[400px] min-h-[300px] border-2 border-gray-400 rounded-xl flex flex-col justify-start items-center '>
        <h1 className='my-2 text-center font-semibold text-3xl '>Login</h1>
          <div className='w-full flex flex-col justify-start items-start ml-4 mt-4'>
            <div className='w-full flex flex-row justify-start items-center'>
            <MdAlternateEmail className='text-lg text-blue-500 mr-2'/>
            <label className='text-lg text-start font-semibold '>
            Email

          </label>
            </div>
          
          <input type='email' value={Email} onChange={(e)=> setEmail(e.target.value)} placeholder='Entrez votre email' className='w-[95%] h-[50px] border-2 border-gray-300 rounded-lg px-2 text-start my-2 ' >
          </input>

          </div>
          <div className='w-full flex flex-col justify-start items-start ml-4 mt-4  '>
            <div className='w-full flex flex-row justify-start items-center'>
              <RiLockPasswordLine className='text-lg text-blue-500 mr-2'/>
            <label className='text-lg text-start font-semibold '>password</label>
            </div>
            
              <input type='password' value={Password} onChange={(e)=> setPassword(e.target.value)} placeholder='Entrez votre mot de passe' className='w-[95%] h-[50px] border-2 border-gray-300 rounded-lg px-2 text-start my-2 ' >
          </input>
          </div>
          <div className='w-full flex justify-center items-center mt-4'>
            <button onClick={handleSubmit} className='text-white w-[95%]  bg-black rounded-lg px-5 py-2 mb-4 flex flex-row justify-center items-center '>{isloading ? (<RotateSpinner size={20} color="#fff"></RotateSpinner>):"Se connecter"} </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Login