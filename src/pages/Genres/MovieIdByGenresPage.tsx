import React, {useEffect} from 'react';
import {Button, Container} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {useLocation, useNavigate, useParams} from "react-router-dom";

import {AppRoutes} from "../../routing";
import {MovieInfo} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";

export const MovieIdByGenresPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const myPathname = pathname.split('/').splice(0, 3).join('/');

    const backLinkHref = myPathname || AppRoutes.GENRE;

    const {movieId} = useParams<{ movieId: string }>();
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

