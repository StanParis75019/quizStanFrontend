import React from 'react'
import { Link } from 'react-router-dom'

const NewNav = () => {
  return (
    <div>
       <header className='flex flex-row items-center justify-between h-16 px-4 md:px-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'>
            <div className='flex items-center gap-2 '>
                <h1 className='text-2xl font-bold'>QuizCom</h1>
            </div>
        <nav className='flex items-center gap-4 '>
        <Link className='text-lg font-medium hover:underline ' to = "/" >
        Accueil 
        </Link>
        <Link className='text-lg font-medium hover:underline ' to = "/about" >
        A propos 
        </Link>
        <Link className='text-lg font-medium hover:underline ' to = "/categories" >
        Categories 
        </Link>
        <Link className='text-lg font-medium hover:underline ' to = "/contact" >
        Contact 
        </Link>
        <Link className='text-lg font-medium hover:underline ' to = "/register" >
        S'inscrire 
        </Link>
        <Link className='text-lg font-medium hover:underline ' to = "/login" >
        Login 
        </Link>
        

        </nav>
        </header> 
    </div>
  )
}

export default NewNav