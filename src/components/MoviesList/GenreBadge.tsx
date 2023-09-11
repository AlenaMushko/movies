import {Box, Typography} from "@mui/material";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genresSlice";

interface IProps {
    genre: number[]
}

export const GenreBadge: React.FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, []);


    let filmGenreId: string[] = [];
    if (genre) {
        filmGenreId = genres?.genres
            .filter(({id}) => genre.includes(id))
            .map(({name}) => name) || [];
    }

    let filmGenres: string = '';
    if (filmGenreId.length > 2) {
        filmGenres = filmGenreId.slice(0, 2).join(', ');
    } else {
        filmGenres = filmGenreId.join(', ')
    }

    return (
        <Box>
            <Typography>{filmGenres || ''}</Typography>
        </Box>
    );
};

