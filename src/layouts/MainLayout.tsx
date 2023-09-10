import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";

export const MainLayout = () => {
    // const {isLoading} = useAppSelector((state) => state.movies);
    // const {movies} = useAppSelector(state => state.movies)
    return (
        <>
            <Header/>
            <Outlet/>
            {/*{movies.length === 0 && isLoading ? <LinearProgress/> : <Outlet/>}*/}
        </>
    );
};

