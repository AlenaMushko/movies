import React from "react";

import {IMovieById} from "../../interfaces";
import {Box, Typography, useTheme} from "@mui/material";

interface IPropsMovieDescription {
    currentMovie: IMovieById
}

export const MovieDescription: React.FC<IPropsMovieDescription> = ({currentMovie}) => {
    const {
        original_title,
        tagline,
        title,
        overview,
        production_companies,
        release_date,
        vote_average,
        genres, budget

    } = currentMovie;

    const theme = useTheme();

    function formatDateToMonthYear(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[month];
        const formattedDate = `${monthName} ${year}`;

        return formattedDate;
    }

    const releaseDate = formatDateToMonthYear(release_date);
    const vote = vote_average.toString().slice(0, 3);
    const genresStr = genres.map(item => item.name).join(', ');

    const productionArr = production_companies?.map(item => ({
        logo_path: item.logo_path,
        name: item.name,
        id: item.id,
    }));

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <Typography variant="h2" sx={{
                textAlign: 'center',
                textDecoration: 'underline'
            }}>{title || original_title || ''}</Typography>
            <Typography variant="h6" sx={{textAlign: 'center', color: '#3949ab'}}>{releaseDate || ''}</Typography>
            <Typography><Typography variant="span">Vote:</Typography>{vote}</Typography>
            <Typography><Typography variant="span">Genres:</Typography>{genresStr}</Typography>
            <Typography><Typography variant="span">Budget:</Typography>{budget}$</Typography>
            <Typography><Typography variant="span">Tagline:</Typography>{tagline}</Typography>
            <Typography variant="subtitle1">{overview}</Typography>
            <Typography></Typography>
            <Box sx={{bgcolor: theme.palette.background.paper, borderRadius: '12px', paddingY: '8px'}}>
                {production_companies && productionArr.map(({logo_path, name, id}) =>
                    logo_path !== null
                        ? (<img key={id}
                                src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                                alt={name || ""}
                                width="100px"
                                style={{marginLeft: '3vw'}}
                        />)
                        : null)}
            </Box>

        </Box>
    );
};

