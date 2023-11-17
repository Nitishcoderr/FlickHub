import React, { useRef, useState } from 'react'
import Header from './Header'
import background from '../images/background.jpg'
import { checkValidData } from '../utils/validate.js'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () =>{
    // Validate the form data
    const message = checkValidData(email.current.value,password.current.value); // checkValidData from utils -> validate.js
    setErrorMessage(message);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={background} alt="bg" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='p-12 bg-black absolute my-28 mx-auto right-0 left-0 w-4/12 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4' >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /> }
        <input ref={email} type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-800' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
        <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 cursor-pointer hover:text-gray-300 transition-all duration-300 underline' onClick={toggleSignInForm} >{isSignInForm ? "New to FlickHub? Sign Up Now" : "Already registered Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
