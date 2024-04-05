import React from 'react'
import { Frame27 } from './Frame27/Frame27'
import './Hero.css'
import SignUpPage from '../../Auth-Page/SignUpPage'

const Hero = () => {
  return (
    <div className='hero-container'>
        <Frame27/>
        
        <div className="signUp">
        <SignUpPage/>
        </div>
    </div>
  )
}

export default Hero