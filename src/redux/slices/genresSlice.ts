import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {AxiosError} from "axios";
import {genresService} from "../../services/genresService";


interface IState {
    genres: IGenre,
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    genres: null,
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

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, {payload}) => {
            state.genres = payload
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
    getAllGenres
}

export {
    genreReducer,
    genreActions
}
