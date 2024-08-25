import React from 'react'
import NewNav from './newNav'
import Fade from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'

const About = () => {

  return ( <>
  
  <NewNav>
    </NewNav>
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white '>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Fade cascade damping={0.2} direction="up" className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-bold'>Qui sommes nous ?</h1>
            <p className='text-lg w-[70%] px-4 my-6 text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo nec ex ullamcorper ullamcorper. Donec vel quam vel ipsum faucibus bibendum. Sed consectetur, velit in commodo tristique, felis dolor cursus purus, non finibus sem ligula in metus.</p>
            <Link className='text-lg font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-400 hover:text-white border-2 border-white py-4 px-8  '>Retour à la liste</Link>
            </Fade>
        </div>
        </section>
    <div className='w-full h-[30rem] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center my-4 '>
            A propos 
        </h1>
        
        <div className='w-[90%] h-[200px] shadow-md shadow-gray-300  flex flex-col justify-center items-center my-4'>
        <Fade cascade direction="up" className='w-full flex flex-col justify-center items-center'>

            <q className='text-center text-lg p-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis assumenda. Expedita, similique repellat! Porro quos dicta consequatur fugiat officiis aliquam accusantium odio cum. Dolorum rem atque quisquam sapiente blanditiis.</q>
             <p className='text-center my-2 text-gray-700 underline '>
                QuizCom
             </p>
             </Fade>
             </div>

        
            
    </div>
    <Footer></Footer>
    </>
  )
}

export default About