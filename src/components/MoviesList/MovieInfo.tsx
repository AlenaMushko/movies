import {Box, Container, useTheme} from "@mui/material";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieDescription} from "./MovieDescription";
import {PosterPreview} from "./PosterPreview";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";
import {CastMovieList} from "./CastMovieList";
import {VideoForMovie} from "./VideoForMovie";

export const MovieInfo: React.FC = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const theme = useTheme();

    const dispatch = useAppDispatch();
    const {currentMovie} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(movieAction.getMovieById({id: +movieId}))
    }, []);

    return (
        <>
            {currentMovie && <><Container sx={{
                display: 'flex',
                gap: '3vw',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column'
                },
            }}
            >
                <PosterPreview
                    posterPath={currentMovie?.poster_path}
                    secondTitle={currentMovie?.original_title} title={currentMovie?.title}
                    adult={currentMovie?.adult}/>
                <MovieDescription currentMovie={currentMovie}/>
            </Container>
                <Box sx={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
                <VideoForMovie id={movieId}/>
                </Box>
                <CastMovieList id={movieId}/>
            </>}
        </>
    );
};

