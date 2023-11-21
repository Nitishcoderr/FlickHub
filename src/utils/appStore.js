import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import movieReducer from "./Slice/movieSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer,
        }
    }
)

export default appStore;