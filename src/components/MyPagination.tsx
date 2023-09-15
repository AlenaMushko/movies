import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {Pagination} from '@mui/material';

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {ILocation} from "../interfaces";
import {movieAction} from "../redux/slices/moviesSlice";
import {genreActions} from "../redux/slices/genresSlice";

interface IProps {
    location: ILocation;
}

export const MyPagination: React.FC<IProps> = ({location}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get('page') || '1');

    const {total_pages} = useAppSelector(state => state.movies);

    const showPages = total_pages > 500 ? 500 : total_pages;

    const genreId = location.pathname.split('/')[2];

    useEffect(() => {
        queryParams.set('page', String(currentPage));
        navigate(location.pathname + "?" + queryParams.toString());
        if (location.pathname === '/') {
            dispatch(movieAction.getAllMovies({page: currentPage}));
        }
        const genrePath = location.pathname.split('/').splice(0, 2).join('/');
        if (genrePath === '/genre') {
            dispatch(genreActions.getGenresById({page: currentPage, id: +genreId}))
        }
        if (location.pathname === '/soon') {
            dispatch(movieAction.getSoonMovies({page: currentPage}))
        }
        if (location.pathname === '/animation') {
            dispatch(movieAction.getAnimationMovies({page: currentPage}))
        }
    }, [currentPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        queryParams.set('page', String(page));
        navigate(location.pathname + "?" + queryParams.toString());
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '60px'}}>
            <Pagination showFirstButton showLastButton
                        variant={"outlined"}
                        count={showPages || 0}
                        page={currentPage}
                        onChange={handlePageChange}
            />
        </Box>
    );
};
