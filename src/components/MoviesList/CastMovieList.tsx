import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {castActions} from "../../redux/slices/castSlice";
import {CastMovieItem} from "./CastMovieItem";
import {Box, Typography} from "@mui/material";
import {CardsContainer} from "../CardsContainer";

interface IPropsCastMovie{
    id:string;
}

export const CastMovieList:React.FC<IPropsCastMovie> = ({id}) => {
    const dispatch = useAppDispatch();
    const {cast} = useAppSelector(state => state.casts)
    useEffect(() => {
        dispatch(castActions.getCastsForMovie({id: +id}))
    }, []);

    const castArr = cast.slice(0,6);

    return (
        <Box sx={{marginTop:'40px'}}>
            <Typography variant="h2" sx={{textAlign:'center'}}>Main actors</Typography>
            <CardsContainer>
                { castArr?.map(castItem=>(
                    <CastMovieItem key={castItem.id} item={castItem} />
                ))}
            </CardsContainer>
        </Box>
    );
};

