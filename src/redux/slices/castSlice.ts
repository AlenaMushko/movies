import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {ICast} from "../../interfaces";
import {castService} from "../../services";



interface IState {
    cast: ICast[],
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    cast: [],
    isLoading: false,
    error: null,
};

const getCastsForMovie = createAsyncThunk<ICast[], {id:number}>(
    'castSlice/getCastsForMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data: { cast }} = await castService.getCastsByMovie(id);
            return cast
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCastsForMovie.fulfilled, (state, {payload}) => {
            state.cast = payload
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

const {reducer: castReducer, actions} = castSlice;

const castActions = {
    ...actions,
  getCastsForMovie
}

export {
   castActions,
    castReducer
}
