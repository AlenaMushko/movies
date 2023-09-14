import React, {useEffect} from 'react';

import {ILocation} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genresSlice";
import {MoviesListCard} from "../MoviesList";
import {CardsContainer} from "../CardsContainer";
import {AppRoutes} from "../../routing";

interface IPropsGenreMovies{
    location:ILocation
}

export const GenreMovies:React.FC<IPropsGenreMovies>= ({location}) => {
    const dispatch = useAppDispatch();
    const {moviesByGenre, page} =useAppSelector(state => state.genres);
    const idGenre = location.pathname.split('/')[2];

    const backLinkHref = location.pathname ?? AppRoutes.GENRE;

    useEffect(() => {
        dispatch(genreActions.getGenresById({page, id:+idGenre}))
    }, [page, idGenre]);

    return (
        <CardsContainer>
            {moviesByGenre?.map((item) => (
                <MoviesListCard key={item.id} item={item}
                                backLinkHref={backLinkHref}
                />
            ))}
        </CardsContainer>
    );
};

