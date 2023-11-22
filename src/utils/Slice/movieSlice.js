import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        TopRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies,addUpcomingMovies,addTopRatedMovies,addTrailerVideo,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;