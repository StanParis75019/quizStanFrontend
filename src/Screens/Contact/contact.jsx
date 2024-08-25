import React, { useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Bond from '../../Components/Bond/Bond'
import axios from 'axios'
import {RotateSpinner} from 'react-spinners-kit'
import { Toaster, toast } from 'react-hot-toast' 

const Contact = () => {
    const [email, setemail] = useState()
    const [nom, setnom] = useState()
    const[telephone,settelephone] = useState()
    const [message, setmessage  ] = useState()
    const [isloading, setisloading] = useState(false)
    const envoyermessage = async () =>{
        setisloading(true)
        setTimeout(async() => {
            try {
                const response = await axios.post("http://localhost:3001/message/createmessage", {
                    email, nom, telephone, message
                })
                setisloading(false)
                setemail("")
                setnom("")
                setmessage("")
                toast.success('Connexion réussie!',{
                    duration: 3000,
                    position: 'top-center',
                    style: {
                      background: '#34D36F',
                      color: 'white',
                    },
                  });
            } catch (error) {
                setisloading(false)
                toast.error('Connexion echouée!',{
                    duration: 3000,
                    position: 'top-center',
                    style: {
                      background: 'red',
                      color: 'white',
                    },
                  });
            }
        }, 2000);
    }
    


  return (
    <div>
        <Navbar></Navbar>
        <Toaster></Toaster>
        <Bond contenu= "Contactez-nous" ></Bond>
        {/* <Header></Header> */}
        <div className=' w-full h-[35rem] flex flex-col justify-center items-center'>
        <div className=' w-[400px] p-3 flex flex-col justify-center items-center shadow-md shadow-gray-400 '>
            <h2 className='w-full text-center font-bold my-2 text-2xl'>Poser vos questions</h2>
            <div className='w-full flex flex-col justify-start items-start'>
                <label className='text-zinc-500 text-lg text-start capitalize' htmlFor="">Email</label>
                <input className='w-full px-2 py-2 rounded text-start border-2 border-gray-300 outline-none text-lg' value={email} onChange={(e) => setemail(e.target.value)} type="email" />
            </div>
            <div className='w-full flex flex-col justify-start items-start'>
                <label className='text-zinc-500 text-lg text-start capitalize' htmlFor="">Nom</label>
                <input className='w-full px-2 py-2 rounded text-start border-2 border-gray-300 outline-none text-lg' value={nom} onChange={(e) => setnom(e.target.value)} type="text" />
            </div>
            <div className='w-full flex flex-col justify-start items-start'>
                <label className='text-zinc-500 text-lg text-start capitalize' htmlFor="">Telephone</label>
                <input className='w-full px-2 py-2 rounded text-start border-2 border-gray-300 outline-none text-lg' value={telephone} onChange={(e) => settelephone(e.target.value)} type="text" />
            </div>
            <div className='w-full flex flex-col justify-start items-start'>
                <label className='text-zinc-500 text-lg text-start capitalize' htmlFor="">Message</label>
                <textarea className='w-full px-2 py-2 rounded text-start border-2 border-gray-300 outline-none text-lg' value={message} onChange={(e) => setmessage(e.target.value)} type="text" />
            </div>
            <button type="submit" onClick={envoyermessage} className="px-2 my-2 rounded py-2 bg-black text-white text-center w-full flex flex-row justify-center items-center" >{isloading ? (<RotateSpinner size={20} color="#fff"></RotateSpinner>):"Envoyer"} </button>
        </div>
        </div>
        <Footer></Footer>

    </div>
  )
}

export default Contact