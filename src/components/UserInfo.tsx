import { Avatar } from "@mui/material";
import React from "react";

import userImg from '../assets/user.png';

export const UserInfo: React.FC = () => {
    const userNick = 'Alona';

    return (
        <Avatar
            alt={userNick}
            src={userImg}
        />
    );
};
