import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IFilm, IGenre, IPagination} from "../../interfaces";
import {genresService} from "../../services/genresService";

interface IState {
    genres: IGenre,
    moviesByGenre: IFilm[],
    page: number,
    total_pages: number,
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    genres: null,
    moviesByGenre: [],
    page: 1,
    total_pages: 0,
    isLoading: false,
    error: null,
};

const getAllGenres = createAsyncThunk<IGenre, void>(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getMoviesByGenreId = createAsyncThunk<IPagination<IFilm>, { page: number, id: number }>(
    'genresSlice/getGenresById',
    async ({page, id}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getById(page, id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, {payload}) => {
            state.genres = payload
        })
        .addCase(getMoviesByGenreId.fulfilled, (state, {payload}) => {
            state.moviesByGenre = payload.results
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

const {reducer: genreReducer, actions} = genresSlice;

const genreActions = {
    ...actions,
    getAllGenres,
    getGenresById: getMoviesByGenreId
}

export {
    genreReducer,
    genreActions
}
