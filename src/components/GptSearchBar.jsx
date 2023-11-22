import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[15%] flex items-center justify-center'>
      <form className='bg-black w-[50%] grid grid-cols-12'>
        <input type="text" className='p-4 rounded-lg m-4 col-span-9' placeholder={lang[langKey]?.getSearchPlaceholder} />
        <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg  col-span-3'>{lang[langKey]?.search}</button> 
      </form>
    </div>
  )
}

export default GptSearchBar
