import {Avatar} from "@mui/material";
import React from "react";

import {useAppSelector} from "../hooks/reduxHooks";

export const UserInfo: React.FC = () => {
    const {user} = useAppSelector(state => state.user);

    return (
        <Avatar sx={{bgcolor: '#a399ca', color: '#03071f'}} alt={user.name} src={user?.photo}>
            {user?.name?.charAt(0)}
        </Avatar>
    );
};
