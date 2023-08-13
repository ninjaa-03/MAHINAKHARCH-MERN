import React from 'react'
import logo from '../img/logo.jpeg'
import { NavLink } from "react-router-dom";
import './About.css'

function About() {
  return (
    <div className='about-page'>
      <div className='section'>
        <img className='logo' src={logo} alt="Me" />
        <p className='heading'>Nitish Kumar</p>
        <ul className='links'>
          <li>  <NavLink className="btn" to="https://www.linkedin.com/in/nitish-kumar-899086221/">LinkedIn</NavLink> </li>
          <li>  <NavLink className="btn" to="https://github.com/ninjaa-03">Github</NavLink> </li>
        </ul>
      </div>
    </div>
  )
}

export default About
