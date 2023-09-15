import React, {ReactNode} from "react";
import {Navigate} from "react-router-dom";

import {AppRoutes} from "./appRoutes";
import {useAppSelector} from "../hooks/reduxHooks";

interface IPropsPrivateRoute {
    children: ReactNode
}

export const PrivateRoute: React.FC<IPropsPrivateRoute> = ({children}) => {
    const {user} = useAppSelector(state => state.user);

    return user ? <>{children}</> : <Navigate to={AppRoutes.LOG_IN}/>;
};
