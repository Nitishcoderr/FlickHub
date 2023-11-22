import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import movieReducer from "./Slice/movieSlice";
import gptReducer from "./Slice/gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
            config:configReducer
        }
    }
)

export default appStore;