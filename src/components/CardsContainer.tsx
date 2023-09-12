import React, {ReactNode} from 'react';
import {Container, useTheme} from "@mui/material";

interface IPropsCardsContainer{
    children:ReactNode
}

export const CardsContainer:React.FC<IPropsCardsContainer> = ({children}) => {
    const theme =useTheme();
    return (
        <Container sx={{
            paddingY: '40px',
            display: 'grid',
            gridGap: '20px',
            gridTemplateRows: '1fr',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },
            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            [theme.breakpoints.up('lg')]: {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
        }}>
            {children}
        </Container>
    );
};

