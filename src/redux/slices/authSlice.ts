import {createSlice} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces";

interface IState {
    user: IUser,
    isLoading: boolean,
    error: any | null,
}

const initialState: IState = {
    user: null,
    isLoading: false,
    error: null,
};


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            window.sessionStorage.removeItem('userId');
        },
    },
    extraReducers: builder => builder

})

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
}

export {
    authActions,
    authReducer
}
