import {Card} from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";

import {IGenresObj} from "../../interfaces";
import {AppRoutes} from "../../routing";

interface IPropsGenreItem {
    item: IGenresObj,
}

export const GenreItem: React.FC<IPropsGenreItem> = ({item}) => {

    const navigate = useNavigate();

    const handleGetMoviesByGanre = () => {
        navigate(`${AppRoutes.GENRE}/${item.id.toString()}`);
    }

    return (
        <Card
            sx={{
                paddingY: '8px',
                fontSize: '20px',
                textAlign: 'center',
                lineHeight: '60px',
                transition: 'boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                ":hover": {
                    boxShadow: "0px 8px 43px #775fd8"
                }
            }}
            onClick={handleGetMoviesByGanre}
        >{item.name}</Card>
    );
};

