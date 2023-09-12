import { useNavigate} from 'react-router-dom';
import React from "react";


import {AppRoutes} from "../../routing";
import {IFilm} from "../../interfaces";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {PosterPreview} from "./PosterPreview";
import {GenreBadge} from "./GenreBadge";

interface IPropsMoviesListCard {
    item: IFilm,
    backLinkHref:string,
}

export const MoviesListCard: React.FC<IPropsMoviesListCard> = ({item, backLinkHref}) => {
    const {
        adult,
        genre_ids,
        id,
        poster_path,
        release_date,
        title, original_title,
        vote_average,
    } = item;

    let releaseDate = '';
    if (release_date) {
        releaseDate = release_date.slice(0, 4);
    }

    const navigate = useNavigate();
    const handleNavigateToCardInfo = () => {
        navigate(`${AppRoutes.MOVIE}/${id.toString()}`, {state:  backLinkHref});
    };

    return (
        <Card
            sx={{
                textAlign: 'center',
                transition: 'boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                ":hover": {
                    boxShadow: "0px 8px 43px #775fd8"
                }
            }}
            onClick={handleNavigateToCardInfo}
        >
            <PosterPreview
                posterPath={poster_path} stars={vote_average}
                secondTitle={original_title} title={title}
                adult={adult}/>
            <CardContent>
                <Typography variant="h4" sx={{height: '80px', overflow: 'hidden',}}>
                    {title || original_title || ''}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '12px'}}>
                    <GenreBadge genre={genre_ids}/>
                    <Typography variant="h6">
                        {releaseDate || ''}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};



