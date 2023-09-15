import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlice";
import {genreReducer} from "./slices/genresSlice";
import {castReducer} from "./slices/castSlice";
import {videoReducer} from "./slices/videoSlice";
import {authReducer} from "./slices/authSlice";


const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        casts: castReducer,
        video: videoReducer,
        user: authReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export type {
    RootState,
    AppDispatch,
}

export {
    store
}
