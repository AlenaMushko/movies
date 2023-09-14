import {Box, Typography} from "@mui/material";

import {useAppSelector} from "../hooks/reduxHooks";

export const NotMovies = () => {
    const {searchQuery} = useAppSelector(state => state.movies);

    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h5">Sorry, but nothing was found for your query - <Typography
                variant="span">{searchQuery}</Typography></Typography>
        </Box>
    );
};

