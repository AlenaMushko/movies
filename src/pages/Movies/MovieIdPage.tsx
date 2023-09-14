import React, {useEffect} from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {Button, Container} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

import {MovieInfo} from "../../components";
import {useAppLocation} from "../../hooks/routerHooks";
import {AppRoutes} from "../../routing";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";


export const MovieIdPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {state} = useAppLocation<{ backLinkHref: string }>();
    const backLinkHref = state?.backLinkHref || AppRoutes.HOME;

    const {movieId} = useParams<{ movieId: string }>();

    const {currentMovie} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(movieAction.getMovieById({id: +movieId}))
    }, []);

    return (
        <Container>
            <Button onClick={()=>navigate(backLinkHref)} variant="outlined" sx={{padding:'12px', marginBottom:'20px'}}><KeyboardReturnIcon  sx={{marginRight:'2vw'}}/> go to the previous page</Button>
            <MovieInfo currentMovie={currentMovie} movieId={movieId}/>
        </Container>
    );
};

