import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {MovieInfo} from "../components";
import {useAppLocation} from "../hooks/routerHooks";
import {AppRoutes} from "../routing";


export const MovieIdPage = () => {

    const navigate = useNavigate();

    const {state} = useAppLocation<{ backLinkHref: string }>();
    const backLinkHref = state?.backLinkHref || AppRoutes.HOME;

    return (
        <Container>
            <Button onClick={()=>navigate(backLinkHref)} variant="outlined" sx={{padding:'12px', marginBottom:'20px'}}><KeyboardReturnIcon  sx={{marginRight:'2vw'}}/> go to the previous page</Button>
            <MovieInfo />
        </Container>
    );
};

