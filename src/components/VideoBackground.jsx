import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((state)=>state.movies?.trailerVideo?.key)

    useMovieTrailer(movieId)

  return (
    <div className='w-full'>
     <iframe
  className='w-full aspect-video'
  src={`https://www.youtube.com/embed/${trailerVideo}?si=cdtzyNFWVL_0MFPp&autoplay=1&mute=1&controls=0&loop=1&rel=0&modestbranding=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>
    </div>
  );
};

export default VideoBackground;
