import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import {Box, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch} from "../hooks/reduxHooks";
import {movieAction} from "../redux/slices/moviesSlice";

export const SearchMovies: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        dispatch(movieAction.setSearchQuery(inputValue));
        dispatch(movieAction.resetPage())
        setInputValue('');

        const params = new URLSearchParams(location.search);
        params.set('page', '1');
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch();
    };

    const handleReset = () => {
        dispatch(movieAction.setSearchQuery(null));

        const params = new URLSearchParams(location.search);
        params.set('page', '1');
        navigate(`${location.pathname}?${params.toString()}`);
    }

    return (
        <Paper component="form" sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
               onSubmit={handleFormSubmit}>
            <Box onClick={handleReset}
                 sx={{
                     cursor: 'pointer',
                     borderRadius: '30%',
                     '&:hover': {
                         backgroundColor: 'rgba(0, 0, 0, 0.05)',
                     }
                 }}>
                <AutoModeIcon/>
                <Typography> reset</Typography>
            </Box>
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>

            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search Movies"
                inputProps={{'aria-label': 'search movies'}}
                value={inputValue}
                onChange={handleInputChange}
            />
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
