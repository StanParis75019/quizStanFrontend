import React from 'react'
import { Fade } from 'react-awesome-reveal';
import {toast, Toaster} from 'react-hot-toast'


const Newsletter = () => {
  const success = (e) =>{
    e.preventDefault();
    
    toast.success('Merci de votre inscription!');
  } 
  return (
    <div className='w-[90%] mx-auto rounded-xl my-10  h-full flex flex-col justify-center items-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-4  text-white '>
      <Toaster position="top-center" />
      <Fade cascade damping={0.2} direction='up'>
      <h1 className='text-4xl text-center text-white my-5 '>Newsletter</h1>
      <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières informations et promotions.</p>
      <form className='w-full flex flex-col justify-center items-center'>
        <input className='text-gray-100 rounded-xl p-2 my-2 w-[350px] bg-transparent transparent border-2 border-gray-100' type='text' placeholder='Votre adresse email' />
        <button onClick={success} className='text-white bg-black rounded-xl px-5 py-2 ' type='submit'>S'inscrire</button>
      </form>

      <p>Nous ne partageons pas votre adresse email avec des tiers.</p>
      </Fade>
      
   

    </div>
  )
}

export default Newsletter