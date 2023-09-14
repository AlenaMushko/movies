import React from 'react';
import {Button, Container} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {useLocation, useNavigate} from "react-router-dom";

import {AppRoutes} from "../../routing";
import {GenreMovies, MyPagination} from "../../components";

export const GenreIdPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container>
            <Button onClick={() => navigate(AppRoutes.GENRE)} variant="outlined"
                    sx={{padding: '12px', marginBottom: '20px'}}><KeyboardReturnIcon sx={{marginRight: '2vw'}}/> go to
                the previous page</Button>
            <GenreMovies location={location}/>
            <MyPagination location={location}/>
        </Container>
    );
};

