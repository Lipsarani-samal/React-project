import React from 'react'
import Navbar from './Navbar'

const First = () => {
    
    
  return (
    <>
    <div className='flex flex-row gap-10 fixed top-0 left-0 w-full bg-gradient-to-r from-pink-900 via-purple-400 to-blue-200  text-white p-4 '>
     <Navbar home="Home" color=""/>
     <Navbar contact="Contact"/>
     <Navbar service="Services"/>
     
    </div>
    <h1 class="text-8xl font-bold text-center text-pink-600 mt-10">WELCOME TO MY WEBSITE🩷</h1>
  </> 
  )
}

export default First