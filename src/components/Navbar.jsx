import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://linkedin.com/in/enrique-crasto-897126252"><FaLinkedin/></a>
        <a href="https://github.com/enrique047"><FaGithub/></a>
        <a href="https://www.instagram.com/_enrique.__?igsh=amN1bGd1MDJsM2Fv"><FaInstagram/></a>
    </div>
  </nav>
}

export default Navbar