import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if(!movies || movies.length === 0){
    return null;
  }
  return (
    <div className='px-4'>
        <h1 className='text-3xl text-white'>{title}</h1>
      <div className='flex overflow-x-auto'>
        <div className='flex'>
            {
                movies.map((movie)=>(
                    <MovieCard  key={movie?.id} posterPath={movie?.poster_path} />
                    ))
            }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
