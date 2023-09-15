import {Box, Container, useTheme} from "@mui/material";
import React from "react";

import {MovieDescription} from "./MovieDescription";
import {PosterPreview} from "./PosterPreview";
import {CastMovieList} from "./CastMovieList";
import {VideoForMovie} from "./VideoForMovie";
import {IMovieById} from "../../interfaces";

interface IpropsMovieInfo {
    currentMovie: IMovieById,
    movieId: string
}

export const MovieInfo: React.FC<IpropsMovieInfo> = ({currentMovie, movieId}) => {
    const theme = useTheme();
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
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                    <VideoForMovie id={movieId}/>
                </Box>
                <CastMovieList id={movieId}/>
            </>}
        </>
    );
};

