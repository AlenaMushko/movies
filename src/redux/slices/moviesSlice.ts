import {createAsyncThunk, createSlice, isFulfilled, isPending,} from "@reduxjs/toolkit";
import {IFilm, IMovieById, IMovieObj} from "../../interfaces";
import {AxiosError} from "axios";
import {moviesService} from "../../services";

interface IState {
    movies: IFilm[],
    currentMovie:IMovieById,
    page:number,
    total_pages:number,
    isLoading: boolean,
    error: any | null,
    theme: string
}

const initialState: IState = {
    movies: [],
    currentMovie:null,
    page:0,
    total_pages:0,
    isLoading: false,
    error: null,
    theme: 'dark'
};

const getAllMovies = createAsyncThunk<IMovieObj, void>(
    'moviesSlice/gettAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const getMovieById = createAsyncThunk<IMovieById, {id:number}>(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    },
    extraReducers: builder => builder
        .addCase(getAllMovies.fulfilled,(state, {payload})=>{
           state.movies = payload.results
            state.page = payload.page
            state.total_pages = payload.total_pages
        })
        .addCase(getMovieById.fulfilled, (state, {payload})=>{
            state.currentMovie = payload
        })
        .addMatcher(isPending(), state => {
            state.isLoading = true
            state.error = null
        })
        .addMatcher(isFulfilled(), (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
})

const {reducer: movieReducer, actions} = moviesSlice;

const  movieAction={
    ...actions,
    getAllMovies,
    getMovieById
}

export {
    movieAction,
    movieReducer
}
