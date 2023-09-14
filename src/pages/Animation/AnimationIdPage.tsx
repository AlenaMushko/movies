import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useAppLocation} from "../../hooks/routerHooks";
import {AppRoutes} from "../../routing";
import {movieAction} from "../../redux/slices/moviesSlice";
import {Button, Container} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {MovieInfo} from "../../components";

export const AnimationIdPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {state} = useAppLocation<{ backLinkHref: string }>();
    const backLinkHref = state?.backLinkHref || AppRoutes.ANIMATION;

    const location = useLocation();
    const movieId = location.pathname.split('/').pop()
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
