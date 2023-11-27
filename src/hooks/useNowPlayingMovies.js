import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/Slice/movieSlice';


const useNowPlayingMovies = ()=>{
  // Fetch Data from TMDb API and update store
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);


const dispatch = useDispatch();
const getNowPlayingMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results))
}

useEffect(() => {
  if(!nowPlayingMovies) getNowPlayingMovies();
}, [])
}

export default useNowPlayingMovies;