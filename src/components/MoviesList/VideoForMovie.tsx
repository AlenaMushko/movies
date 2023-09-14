import {Button} from '@mui/material';
import React, {useEffect, useState} from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {videoActions} from "../../redux/slices/videoSlice";
import {VideoModal} from "./VideoModal";

interface IPropsVideoForMovie {
    id: string,
}

export const VideoForMovie: React.FC<IPropsVideoForMovie> = ({id}) => {
    const dispatch = useAppDispatch();
    const {video} = useAppSelector(state => state.video);
    const [isOpenVideo, setIsOpenVideo] = useState(false)

    useEffect(() => {
        dispatch(videoActions.getVideoForMovie({id: +id}))
    }, []);
    const isVideo = video.length !== 0;

    return (
        <>
            {isVideo && <Button variant="contained" size="large" onClick={() => setIsOpenVideo(true)}>
                Watch the trailer <YouTubeIcon fontSize="large"/>
                <VideoModal url={`https://www.youtube.com/embed/${video[0]?.key}`} isOpenVideo={isOpenVideo}
                            setOpenVideo={setIsOpenVideo}/>
            </Button>}
        </>
    );
};

