import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import background from '../images/background.jpg';


const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-10">
      <img 
        src={background}
        alt="logo"
      />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage
