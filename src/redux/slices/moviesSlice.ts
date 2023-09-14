import {createAsyncThunk, createSlice, isFulfilled, isPending,} from "@reduxjs/toolkit";
import {IFilm, IMovieById, IMovieObj, IPagination} from "../../interfaces";
import {AxiosError} from "axios";
import {moviesService} from "../../services";

interface IState {
    movies: IFilm[],
    currentMovie: IMovieById,
    searchQuery: string | null,
    page: number,
    total_pages: number,
    isLoading: boolean,
    error: any | null,
    theme: string
}

const initialState: IState = {
    movies: [],
    currentMovie: null,
    searchQuery: null,
    page: 1,
    total_pages: 0,
    isLoading: false,
    error: null,
    theme: 'dark'
};

const getAllMovies = createAsyncThunk<IPagination<IFilm>, { page: number }>(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const getMovieById = createAsyncThunk<IMovieById, { id: number }>(
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

const getSearchMovie = createAsyncThunk<IMovieObj, { page: number, value: string }>(
    'moviesSlice/getSearchMovie',
    async ({page, value}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getSearch(page, value);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getSoonMovies = createAsyncThunk<IPagination<IFilm>, { page: number }>(
    'moviesSlice/getSoonMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getSoon(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const getAnimationMovies = createAsyncThunk<IPagination<IFilm>, { page: number }>(
    'moviesSlice/getAnimationMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAnimation(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        resetPage: (state) => {
            state.page = 1
        },
        setSearchQuery: (state, {payload}) => {
            state.searchQuery = payload
        },
    },
    extraReducers: builder => builder
        .addCase(getAllMovies.fulfilled, (state, {payload}) => {
            state.movies = payload.results
            state.page = payload.page
            state.total_pages = payload.total_pages
        })
        .addCase(getMovieById.fulfilled, (state, {payload}) => {
            state.currentMovie = payload
        })
        .addCase(getSearchMovie.fulfilled, (state, {payload}) => {
            state.movies = payload.results
            state.page = payload.page
            state.total_pages = payload.total_pages
        })
        .addCase(getSoonMovies.fulfilled, (state, {payload}) => {
            state.movies = payload.results
            state.page = payload.page
            state.total_pages = payload.total_pages
        })
        .addCase(getAnimationMovies.fulfilled, (state, {payload}) => {
            state.movies = payload.results
            state.page = payload.page
            state.total_pages = payload.total_pages
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

const movieAction = {
    ...actions,
    getAllMovies,
    getMovieById,
    getSearchMovie,
    getSoonMovies,
    getAnimationMovies
}

export {
    movieAction,
    movieReducer
}
