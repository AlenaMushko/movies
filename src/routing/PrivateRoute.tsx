import React, {ReactNode} from "react";
import {Navigate} from "react-router-dom";

import {AppRoutes} from "./appRoutes";

interface IPropsPrivateRoute {
    children: ReactNode
}

export const PrivateRoute: React.FC<IPropsPrivateRoute> = ({children}) => {
    const user = sessionStorage.getItem('userName')


    return user ? <>{children}</> : <Navigate to={AppRoutes.LOG_IN}/>;
};
