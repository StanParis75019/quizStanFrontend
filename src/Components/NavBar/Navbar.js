import React from 'react'
import "./Navbar.css"
import {Zoom,Fade}from "react-awesome-reveal"

const Navbar = () => {
    const links = [
        {name: "Home", path: "/"},
        {name: "A propos", path: "/apropos"},
        {name: "Login", path: "/login"},
        {name: "S'inscrire", path: "/register"}
  
    ]
  return (
    <div className = "Container">
        <Fade className='w-full' cascade damping={0.2} direction="left" >
        <span className = "logo">Quiz App</span>
            </Fade> 
        
        <ul className = "nav-links">
        <Zoom cascade damping={0.2} direction="up" > 
        {links.map((link, index) => {
            return (
                <li key={index}>
                    <a href={link.path}>{link.name}</a>
                </li>
            )
        })}
        </Zoom>
        </ul>

    </div>
  )
}

export default Navbar