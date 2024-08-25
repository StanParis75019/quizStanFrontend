import React from 'react'
import Carte from '../Cartes/Carte'
import { Fade, Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const QuizType = () => {
  const quiztypedata = [
    {title: 'Mathématiques', img: 'math.jpg'},
    {title: 'Français', img: 'langue.jpg'},
    {title: 'Histoire', img: 'foot1.jpg'},
    {title: 'Sciences', img: 'langue.jpg'},
    {title: 'Langues', img: 'math.jpg'},
    {title: 'Autres', img: 'langue.jpg'},
    {title: 'Histoire', img: 'foot1.jpg'},
    {title: 'Sciences', img: 'langue.jpg'},
    {title: 'Langues', img: 'math.jpg'},
    {title: 'Autres', img: 'langue.jpg'},
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-[80vh]' >
        <h1 className='text-4xl text-center font-bold text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ' >Choisissez le type de quiz</h1>
      <div className='flex flex-row justify-center items-center w-full flex-wrap' >
        
        
          <Link className='flex flex-row justify-center items-center w-full flex-wrap' to={`/startQuiz`}>
          <Zoom cascade damping={0.2} direction ="up" >
          {quiztypedata.map((item)=>{
          return(
            <Carte key={item.title} title={item.title} image={item.img} />
          )
        })}
          
        </Zoom>
        </Link>
        
        
        

      </div>
    </div>
  )
}

export default QuizType