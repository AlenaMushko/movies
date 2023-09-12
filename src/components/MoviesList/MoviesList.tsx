import React, {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "./MoviesListCard";
import {CardsContainer} from "../CardsContainer";

interface IPropsMoviesList {
    backLinkHref:string,
    searchValue:string
}

export const MoviesList: React.FC<IPropsMoviesList> = ({backLinkHref, searchValue}) => {
    const dispatch = useAppDispatch();
    const {movies, page, total_pages} = useAppSelector(state => state.movies);



    useEffect(() => {
        dispatch(movieAction.getAllMovies())
    }, []);

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

