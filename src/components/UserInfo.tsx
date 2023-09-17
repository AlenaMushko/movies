import {Avatar} from "@mui/material";
import React from "react";

export const UserInfo: React.FC = () => {
    const user = sessionStorage.getItem('userName')

    return (
        <Avatar sx={{bgcolor: '#a399ca', color: '#03071f'}} alt={user}>
            {user?.charAt(0)}
        </Avatar>
    );
};
