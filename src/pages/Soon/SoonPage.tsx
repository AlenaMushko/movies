import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MoviesList, MyPagination, NotMovies} from "../../components";
import {movieAction} from "../../redux/slices/moviesSlice";

export const SoonPage = () => {
    const location = useLocation();
    const backLinkHref = location.pathname ?? '/';
    const dispatch = useAppDispatch();
    const {movies, page} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getSoonMovies({page:page}))
    }, [ page]);

    return (
        <>
            <MoviesList backLinkHref={backLinkHref} movies={movies}/>
            {page >=1 && <MyPagination location={location}/>}
            {movies.length === 0 && <NotMovies/>}
        </>
    );
};


