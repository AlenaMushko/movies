import { Card } from '@mui/material';
import React from 'react';

import {IGenresObj} from "../../interfaces";

interface IPropsGenreItem{
    item:IGenresObj;
}

export const GenreItem:React.FC<IPropsGenreItem> = ({item}) => {

    return (
        <Card
            sx={{
                paddingY:'8px',
                fontSize:'20px',
                textAlign: 'center',
                lineHeight: '60px',
                transition: 'boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                ":hover": {
                    boxShadow: "0px 8px 43px #775fd8"
                }
            }}
        >{item.name}</Card>
    );
};

