import React, {Dispatch, SetStateAction} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {Dialog} from '@mui/material';

interface IVideoModal {
    url: string,
    isOpenVideo: boolean,
    setOpenVideo: Dispatch<SetStateAction<boolean>>,
}

export const VideoModal: React.FC<IVideoModal> = ({url, isOpenVideo, setOpenVideo}) => {
    const backdropRef = React.useRef(null);
    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (backdropRef.current) {
            (backdropRef.current as any).focus();
        }
    };

    const handleClose = () => {
        setOpenVideo(false);
    };

    return (
        <Dialog open={isOpenVideo} onClose={() => setOpenVideo(false)} fullWidth={true} maxWidth="md">
            <Box onClick={handleModalClick}>
                <IconButton
                    style={{position: 'absolute', right: 10, top: 10, color: 'white'}}
                    onClick={handleClose}
                >
                    <CloseIcon/>
                </IconButton>
            </Box>

            <iframe
                style={{width: '100%', height: '60vh'}}
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Dialog>
    );
};
