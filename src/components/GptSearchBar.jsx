import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openAi';
import { Navigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/Slice/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    // movie -> search movie in TMDb

    const searchMovieTMDb = async (movie) =>{
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=hi-IN&page=1`,API_OPTIONS)
      const json = await data.json()
      return json.results;
    }

    // handleGptSearchClick
    const handleGptSearchClick = async () =>{
      console.log(searchText.current.value);
      const gptQuery =  "As a movie recommendation system, suggest five movies related to the query: '" +
      searchText.current.value +
      "'. Please provide the names separated by commas, like this example result: 'Jawan, War, Leo, Kaithi, Master'.";
      // Make an api call to open ai and get movie results
      const gptResults = await openAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      if(!gptResults.choices){
        Navigate("/error")
      }
      // This will convert string into array
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
      // For each movie i will search TMDb api
      const promiseArray = gptMovies.map((movie) => searchMovieTMDb(movie))
       // [promise,promise,promise,promise,promise]

      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}))

    }

  return (
    <div className='pt-[15%] flex items-center justify-center'>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black w-[50%] grid grid-cols-12'>
        <input ref={searchText} type="text" className='p-4 rounded-lg m-4 col-span-9' placeholder={lang[langKey]?.getSearchPlaceholder} />
        <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg  col-span-3'>{lang[langKey]?.search}</button> 
      </form>
    </div>
  )
}

export default GptSearchBar
