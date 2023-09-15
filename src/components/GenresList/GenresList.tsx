import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genresSlice";
import {CardsContainer} from "../CardsContainer";
import {GenreItem} from "./GenreItem";

export const GenresList: React.FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, []);

    return (
        <CardsContainer>
            {genres?.genres?.map(genre => (
                <GenreItem key={genre.id} item={genre}/>
            ))}
        </CardsContainer>
    );
};

