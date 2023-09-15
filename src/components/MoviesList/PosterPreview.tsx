import React from "react";
import {Avatar, Box, Rating} from "@mui/material";

interface IPropsPosterPreview {
    stars?: number;
    posterPath: string,
    adult?: boolean;
    title: string;
    secondTitle: string,
}

export const PosterPreview: React.FC<IPropsPosterPreview> = ({stars, posterPath, adult, title, secondTitle}) => {
    const cardSRC = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const notPoster = 'https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
    return (
        <Box sx={{position: 'relative'}}>
            {posterPath
                ? <img
                    src={cardSRC}
                    alt={title || secondTitle || ''}
                    width="100%"
                    style={{borderRadius: '8px 8px 0 0 '}}
                />
                : <img
                    src={notPoster}
                    alt={title || secondTitle || 'Film poster'}
                    width="100%"
                    style={{borderRadius: '8px 8px 0 0 '}}
                />}
            {adult && <Avatar alt="adult" src=""
                              sx={{
                                  bgcolor: 'rgb(240, 212, 58)',
                                  position: "absolute",
                                  top: "2%",
                                  right: "5%"
                              }}
            >
                18+
            </Avatar>
            }
            {stars && <Rating name="customized-10" defaultValue={stars} max={10}
                              sx={{position: 'absolute', top: '2%', left: '5%'}}
            />}
        </Box>
    );
};

