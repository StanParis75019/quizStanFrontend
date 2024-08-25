import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-black py-8   '>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'> 
        <div className='flex flex-col justify-start items-start'>
          <h2 className='  text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Catégories</h2>
          <div className='flex flex-col justify-start items-start '>
            <a className='text-white '>Mathematique</a>
            <a className='text-white '>Histoire</a>
            <a className='text-white '>Sports</a>
            <a className='text-white '>Connaissances générales</a>
            <a className='text-white '>Informatique</a>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <div className='flex flex-col justify-start items-start '>          <h2 className='  text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Ressources</h2>

            <a className='text-white '>Accueil</a>
            <a className='text-white '>A propos</a>
            <a className='text-white '>Types de Quiz</a>
            <a className='text-white '>Contacts</a>
            <a className='text-white '>Connexion</a>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='  text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Contacts </h2>
          <div className='flex flex-col justify-start items-start '>
            <a className='text-white '>Mathematique</a>
            <a className='text-white '>Histoire</a>
            <a className='text-white '>Sports</a>
            <a className='text-white '>Connaissances générales</a>
            <a className='text-white '>Informatique</a>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='  text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Site Web </h2>
          <div className='flex flex-col justify-start items-start '>
            <a className='text-white '>Vie privée</a>
            <a className='text-white '>Presse</a>
            <a className='text-white '>Conditions d'utilisation</a>
            <a className='text-white '>Policy</a>
           
          </div>
        </div>
          </div>
          <div className='container flex flex-row justify-around items-center  mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-300'>
            <p>&copy; Copyright Tous les droits sont réservés</p>
          </div>
    </div>
  )
}

export default Footer