import React from "react";
import {Button} from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import {movieAction} from "../redux/slices/moviesSlice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

export const ThemeToggleButton: React.FC = () => {
    const dispatch = useAppDispatch()
    const {theme} = useAppSelector(state => state.movies)

    const toggleThemeHandler = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        dispatch(movieAction.toggleTheme());
    };

    return (
        <Button onClick={toggleThemeHandler}>
            {theme === 'dark' ? <NightsStayIcon fontSize="large"/> : <Brightness7Icon fontSize="large"/>}
        </Button>
    );
}
