import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";

import {
    AnimationIdPage,
    AnimationPage,
    GenreIdPage,
    GenresPage, LoginPage,
    MovieIdByGenresPage,
    MovieIdPage,
    MoviesPage, RegisterPage, SoonIdPage,
    SoonPage,
} from "../pages";
import {AppRoutes} from "./appRoutes";
import {MainLayout} from "../layouts";
import {Error} from "../components";
import {PrivateRoute} from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: AppRoutes.HOME,
                element: <PrivateRoute>
                    <MoviesPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.MOVIE_ID,
                element: <PrivateRoute>
                    <MovieIdPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.GENRE,

                element: <PrivateRoute>
                    <GenresPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.GENRE_ID,
                element: <PrivateRoute>
                    <GenreIdPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.MOVIE_GENRE_ID,
                element: <PrivateRoute>
                    <MovieIdByGenresPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.SOON,
                element: <PrivateRoute>
                    <SoonPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.SOON_ID,
                element: <PrivateRoute>
                    <SoonIdPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.ANIMATION,
                element: <PrivateRoute>
                    <AnimationPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.ANIMATION_ID,
                element: <PrivateRoute>
                    <AnimationIdPage/>
                </PrivateRoute>,
            },
            {
                path: AppRoutes.LOG_IN,
                element: <LoginPage/>,
            },
            {
                path: AppRoutes.REGISTER,
                element: <RegisterPage/>,
            },
        ]
    },
    {
        path: "*",
        element: <Error/>,
    },
]);
