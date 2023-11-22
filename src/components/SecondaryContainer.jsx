import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies =useSelector((store)=>store?.movies)
  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-24 pl-12'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top-Rated"} movies={movies?.TopRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      {/* <MovieList title={"Horror"} movies={movies} /> */}
      </div>
    </div>
  )
}

export default SecondaryContainer
