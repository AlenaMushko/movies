import React from "react";

import {MoviesListCard} from "./MoviesListCard";
import {CardsContainer} from "../CardsContainer";
import {IFilm} from "../../interfaces";

interface IPropsMoviesList {
    backLinkHref: string,
    movies: IFilm[]
}

export const MoviesList: React.FC<IPropsMoviesList> = ({backLinkHref, movies}) => {

    return (
        <CardsContainer>
            {movies?.map((item) => (
                <MoviesListCard key={item.id} item={item}
                                backLinkHref={backLinkHref}
                />
            ))}
        </CardsContainer>
    );
};

