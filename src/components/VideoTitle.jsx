import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-32 px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='text-lg py-6 w-1/4'>{overview}</p>
      <div className='flex items-center'>
        <button className='bg-white hover:opacity-80 transition-all duration-300 ease-in-out text-black font-semibold rounded-md px-8 py-2 mx-1'> ▶ Play</button>
        <button className='bg-gray-500 font-semibold text-white rounded-md px-8 py-2 mx-1'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
