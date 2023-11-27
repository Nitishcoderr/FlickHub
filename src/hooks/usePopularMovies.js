import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addPopularMovies } from '../utils/Slice/movieSlice';

const usePopularMovies = ()=>{
  const nowPopularMovies = useSelector(store=>store.movies.popularMovies);

const dispatch = useDispatch();
const getPopularMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=hi-IN&page=1",API_OPTIONS);
  const json = await data.json();
  dispatch(addPopularMovies(json.results))
}

useEffect(() => {
  if(!nowPopularMovies) getPopularMovies();
}, [])
}

export default usePopularMovies;