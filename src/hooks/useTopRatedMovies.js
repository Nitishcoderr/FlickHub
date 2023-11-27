import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addTopRatedMovies } from '../utils/Slice/movieSlice';

const useTopRatedMovies = ()=>{
  const RatedMovies = useSelector(store=>store.movies.TopRatedMovies);


const dispatch = useDispatch();
const getTopRatedMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=hi-IN&page=1",API_OPTIONS);
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results))
}

useEffect(() => {
  if(!RatedMovies) getTopRatedMovies();
}, [])
}

export default useTopRatedMovies;