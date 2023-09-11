import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {CssBaseline, LinearProgress, ThemeProvider} from "@mui/material";

import {Header} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {darkTheme, lightTheme} from "../themes/themes";
import {movieAction} from "../redux/slices/moviesSlice";

export const MainLayout = () => {
    const {isLoading, movies, theme} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (theme !== savedTheme) {
            dispatch(movieAction.toggleTheme());
        }
    }, [dispatch, theme]);

    const providerTheme = theme === 'dark' ? darkTheme : lightTheme;

    return (
         <ThemeProvider theme={providerTheme}>
             <CssBaseline/>
            <Header/>
            {movies.length === 0 && isLoading ? <LinearProgress/> : <Outlet/>}
        </ThemeProvider>
    );
};

