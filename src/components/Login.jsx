import React, { useState } from 'react'
import Header from './Header'
import background from '../images/background.jpg'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={background} alt="bg" />
      </div>
      <form className='p-12 bg-black absolute my-28 mx-auto right-0 left-0 w-4/12 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4' >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /> }
        <input type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-800' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 cursor-pointer hover:text-gray-300 transition-all duration-300' onClick={toggleSignInForm} >{isSignInForm ? "New to FlickHub? Sign Up Now" : "Already registered Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
