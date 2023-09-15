import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import {useAppLocation} from "../../hooks/routerHooks";
import {AppRoutes} from "../../routing";
import {MovieInfo} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";

export const SoonIdPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {state} = useAppLocation<{ backLinkHref: string }>();
    const backLinkHref = state?.backLinkHref || AppRoutes.SOON;

    const location = useLocation();
    const movieId = location.pathname.split('/').pop()
    const {currentMovie} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(movieAction.getMovieById({id: +movieId}))
    }, []);

    return (
        <Container>
            <Button onClick={() => navigate(backLinkHref)} variant="outlined"
                    sx={{padding: '12px', marginBottom: '20px'}}><KeyboardReturnIcon sx={{marginRight: '2vw'}}/> go to
                the previous page</Button>
            <MovieInfo currentMovie={currentMovie} movieId={movieId}/>
        </Container>
    );
};


