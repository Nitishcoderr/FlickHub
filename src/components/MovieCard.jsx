import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN_URL + posterPath} alt="movie_img" />
    </div>
  )
}

export default MovieCard
