import {Link} from "react-router-dom";
import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";

import {AppRoutes} from "../routing/appRoutes";
import errorPage from '../assets/error.webp';

export const Error: React.FC = () => {
    const theme = useTheme();

    return (<Container sx={{
            color: '#ea5c0f', paddingY: '5vh', background: '#151223', width: '100vw', height: '100vh',
            display: 'flex', flexDirection: 'column', gap: '4vh'
        }}>
            <Typography sx={{textAlign: 'center'}}>Error, something went wrong</Typography>

            <Link to={AppRoutes.HOME} style={{textDecoration: 'none'}}>
                <Button sx={{color: '#f7b009'}}>
                    <Box marginRight="12px"><LogoutIcon/></Box>Go to home page
                </Button>
            </Link>

            <img src={errorPage}
                 alt="Error page"
                 style={{borderRadius: '12px'}}
            />
        </Container>

    )
}

