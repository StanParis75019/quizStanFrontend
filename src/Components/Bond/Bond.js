import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Bond = (props) => {
  return (
    <div className='w-full h-[20rem] bg-gradient-to-r flex flex-col justify-center items-center from-violet-500 to-purple-700 '>
        <Fade cascade damping={0.2} direction='up' >
        <h1 className='text-5xl text-center font-bold text-white'>{props.contenu}</h1>
        </Fade>
    </div>
  )
}

export default Bond