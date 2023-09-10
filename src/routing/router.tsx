import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {AnimationPage, GenresPage, MovieIdPage, MoviesPage, SoonPage, TvPage} from "../pages";
import {AppRoutes} from "./appRoutes";
import {MainLayout} from "../layouts";

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
                path: AppRoutes.SOON,
                element: <SoonPage/>,
            },
            {
                path: AppRoutes.TV,
                element: <TvPage/>,
            },
            {
                path: AppRoutes.ANIMATION,
                element: <AnimationPage/>,
            },
        ]
    },
    {
        path: "*",
        element: <MainLayout/>,
    },
]);
