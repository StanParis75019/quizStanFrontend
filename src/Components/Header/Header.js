import React from 'react'
import "./Header.css"
import {Zoom,Fade}from "react-awesome-reveal"
import Typewriter from "typewriter-effect"


const Header = () => {
  return (
    // <div className = "Header">
    //     <div className = "SupHeader">
    //         <div className = "elements">
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white '>
        <div className='w-full h-full flex flex-col justify-center items-center'>
        <Zoom cascade damping={0.2} direction="up" >
              
              <p className = "text-6xl text-black text-center font-bold text-4xl text-center font-bold text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 "> 
              <Typewriter onInit={(typewriter) =>{
                typewriter.typeString('Un quiz en ligne pour découvrir vos connaissances sur Stan')
               .pauseFor(2500).deleteAll().start();


              }}
              />
              </p>
              
               </Zoom>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <p className='w-[80%] my-6 p-4 text-lg text-center '>
                  lorem ipsum dolor sit amet, consect id ipsum dolor sit amet, consect
            
                </p>

              </div>
          
          <Zoom cascade damping={0.2} direction="up" >
          <div className = "flex flex-row justify-center items-center w-full h-full"> 
                <button className = "text-lg text-white bg-black rounded-xl mx-2 my-5 px-5 py-2 border-2 bg-transparent px-8 py-4 border-white ">Commencer le quiz</button>
                <button className = "text-lg text-white bg-black rounded-xl mx-2 my-5 px-5 py-2 border-2 bg-transparent px-8 py-4 border-white ">En savoir plus</button>
              </div>
              </Zoom>
        </div>
        </section>
            
              
        
  )
}

export default Header