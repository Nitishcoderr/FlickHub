import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addTopRatedMovies } from '../utils/Slice/movieSlice';

const useTopRatedMovies = ()=>{
const dispatch = useDispatch();
const getTopRatedMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
  console.log(data);
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results))
}

useEffect(() => {
    getTopRatedMovies();
}, [])
}

export default useTopRatedMovies;