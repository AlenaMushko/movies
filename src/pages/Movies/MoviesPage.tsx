import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";

import {MoviesList, SearchMovies, MyPagination, NotMovies} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";

export const MoviesPage = () => {
    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';
    const dispatch = useAppDispatch();
    const {movies, page, searchQuery} = useAppSelector(state => state.movies);

    useEffect(() => {
        if (searchQuery) {
            dispatch(movieAction.getSearchMovie({page: page, value: searchQuery}))
        } else {
            dispatch(movieAction.getAllMovies({page: page}))
        }
    }, [searchQuery, page]);

    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <SearchMovies/>
            </Box>
            <MoviesList backLinkHref={backLinkHref} movies={movies}/>
            {page >= 1 && <MyPagination location={location}/>}
            {movies.length === 0 && <NotMovies/>}
        </>
    );
};

