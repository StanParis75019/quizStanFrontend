import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Header from '../../Components/Header/Header'
import Newsletter from '../../Components/Newsletter/Newsletter'

import Footer from '../../Components/Footer/Footer'
import QuizType from '../../Components/QuizType/QuizType'
import NewNav from '../../Components/newNav'



const Accueil = () => {
  return (
    <div>
        <NewNav></NewNav>
        <Header></Header>
        <Newsletter></Newsletter>
        <QuizType></QuizType>
        <Footer></Footer>
        
    </div>
  )
}

export default Accueil