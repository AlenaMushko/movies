import React, {useEffect} from "react";
import { useTheme} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "./MoviesListCard";
import {CardsContainer} from "../CardsContainer";

export const MoviesList: React.FC = () => {
    const theme =useTheme();
    const dispatch = useAppDispatch();
    const {movies, page, total_pages} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getAllMovies())
    }, []);

    return (
      <CardsContainer>
          {movies?.map((item) => (
              <MoviesListCard key={item.id} item={item}
                  // pageType={pageType} backLinkHref={backLinkHref}
              />
          ))}
      </CardsContainer>
    );
};

