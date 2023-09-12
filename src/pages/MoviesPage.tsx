import React, {useState} from 'react';
import {MoviesList, SearchMovies} from "../components";
import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";

export const MoviesPage = () => {
    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';

    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <SearchMovies setSearchValue={setSearchValue}/>
            </Box>
            <MoviesList backLinkHref={backLinkHref} searchValue={searchValue}/>
        </>
    );
};

