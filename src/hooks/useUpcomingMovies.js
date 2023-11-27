import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUpcomingMovies } from '../utils/Slice/movieSlice';

const useUpcomingMovies = ()=>{
  const upcomingMovie = useSelector(store=>store.movies.upcomingMovies);

const dispatch = useDispatch();
const getUpcomingMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=hi-IN&page=1",API_OPTIONS);
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results))
}

useEffect(() => {
  if(!upcomingMovie) getUpcomingMovies();
}, [])
}

export default useUpcomingMovies;