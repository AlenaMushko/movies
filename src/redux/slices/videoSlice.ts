import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IVideo} from "../../interfaces";
import {videoService} from "../../services";

interface IState {
    video: IVideo[],
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    video: [],
    isLoading: false,
    error: null,
};

const getVideoForMovie = createAsyncThunk<IVideo[], { id: number }>(
    'videoSlice/getVideoForMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await videoService.getVideoByMovie(id);
            return results;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getVideoForMovie.fulfilled, (state, {payload}) => {
            state.video = payload
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

const {reducer: videoReducer, actions} = videoSlice;

const videoActions = {
    ...actions,
    getVideoForMovie
}

export {
    videoActions,
    videoReducer
}
