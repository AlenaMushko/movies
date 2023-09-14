import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {
    AnimationIdPage,
    AnimationPage,
    GenreIdPage,
    GenresPage,
    MovieIdByGenresPage,
    MovieIdPage,
    MoviesPage, SoonIdPage,
    SoonPage,
} from "../pages";
import {AppRoutes} from "./appRoutes";
import {MainLayout} from "../layouts";
import {Error} from "../components";

export const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: <MoviesPage/>,
            },
            {
                path: AppRoutes.MOVIE_ID,
                element: <MovieIdPage/>,
            },
            {
                path: AppRoutes.GENRE,
                element: <GenresPage/>,
            },
            {
                path: AppRoutes.GENRE_ID,
                element: <GenreIdPage/>,
            },
            {
                path: AppRoutes.MOVIE_GENRE_ID,
                element: <MovieIdByGenresPage/>,
            },
            {
                path: AppRoutes.SOON,
                element: <SoonPage/>,
            },
            {
                path: AppRoutes.SOON_ID,
                element: <SoonIdPage/>,
            },
            {
                path: AppRoutes.ANIMATION,
                element: <AnimationPage/>,
            },
            {
                path: AppRoutes.ANIMATION_ID,
                element: <AnimationIdPage/>,
            },
        ]
    },
    {
        path: "*",
        element: <Error/>,
    },
]);
