import {Box, Card, CardContent, Typography} from '@mui/material';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import {ICast} from "../../interfaces";
import {PosterPreview} from "./PosterPreview";

interface IpropsCastMovieItem {
    item: ICast,
}

export const CastMovieItem: React.FC<IpropsCastMovieItem> = ({item}) => {
    const {character, name, original_name, profile_path, popularity} = item;

    return (
        <Card sx={{borderRadius:'12px 12px 0 0 '}}>
            <PosterPreview
                posterPath={profile_path}
                secondTitle={original_name} title={name}
            />
            <CardContent>

                <Typography sx={{
                    textAlign: 'center',
                    textDecoration: 'underline'
                }}><Typography variant="span">Character:</Typography>{character || ''}</Typography>

                <Typography><Typography variant="span">Stage name:</Typography>{name || ''}</Typography>
                <Typography><Typography variant="span">Name:</Typography>{original_name || ''}</Typography>

                <Box sx={{display:'flex', gap:'12px', justifyContent:'flex-end'}}>
                    <ThumbUpIcon/> <Typography>{popularity}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

