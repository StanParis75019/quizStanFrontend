import React from 'react'
import NewNav from '../Components/newNav'
import Bond from '../Components/Bond/Bond'
import Footer from '../Components/Footer/Footer'
import QuizType from '../Components/QuizType/QuizType'

const Categorie = () => {
  return (
    <div>
      <NewNav></NewNav>
      <Bond contenu = "Voici l'ensemble de nos catégories" ></Bond>
      <div className='w-full ' >
        <QuizType></QuizType>
      </div>


      <Footer></Footer>
    </div>
  )
}

export default Categorie