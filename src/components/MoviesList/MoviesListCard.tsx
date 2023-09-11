import {Link} from 'react-router-dom';
import React, {useEffect} from "react";


import {AppRoutes} from "../../routing/appRoutes";
import {IFilm} from "../../interfaces";
import {Card, CardContent, Typography} from "@mui/material";
import {PosterPreview} from "./PosterPreview";
import {GenreBadge} from "./GenreBadge";

interface IProps {
    item: IFilm,
    // pageType, backLinkHref
}

export const MoviesListCard: React.FC<IProps> = ({
                                                     item,
                                                     // pageType, backLinkHref
                                                 }) => {
    const {
        adult,
        backdrop_path,
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

    // const movieLink = `${AppRoutes.MOVIE}/${id}`;
    // const linkToUse = pageType === "tv" ? "/tv" : movieLink;
    //
    // useEffect(() => {
    //     localStorage.setItem('backLinkHref', backLinkHref);
    // }, [backLinkHref]);
    // console.log(item)
    return (
        <Card
            sx={{
                textAlign: 'center',
                lineHeight: '60px',
                transition: 'boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                ":hover": {
                    boxShadow: "0px 8px 43px #775fd8"
                }
            }}
        >
            {/*<Link*/}
            {/*    to={{*/}
            {/*        pathname: linkToUse,*/}
            {/*        state: {backLinkHref}, // Передаємо backLinkHref як стан*/}
            {/*    }}*/}
            {/*    // to={linkToUse}*/}
            {/*>*/}
                <PosterPreview
                    // backdropPath={backdrop_path}
                               posterPath={poster_path} stars={vote_average}
                               secondTitle={original_title} title={title}
                               adult={adult}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title || original_title || ''}
                    </Typography>
                    <GenreBadge genre={genre_ids}/>
                    <Typography gutterBottom variant="h5" component="div">
                        {releaseDate || ''}
                    </Typography>
                </CardContent>
            {/*</Link>*/}
        </Card>
    );
};



