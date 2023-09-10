import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import {AppRoutes} from "../routing";


export const Header: React.FC = () => {

    const links = [
        {
            path: AppRoutes.HOME,
            label: 'All Movies'
        },
        {
            path: AppRoutes.GENRE,
            label: 'Genres'
        },
        {
            path: AppRoutes.SOON,
            label: 'Soon'
        },
        {
            path: AppRoutes.TV,
            label: 'Tv'
        },
        {
            path: AppRoutes.ANIMATION,
            label: 'Animation'
        }
    ]
    const {pathname} = useLocation();

    return (
        <header>
            <nav>
                {links.map((link) => (
                    <Link
                        key={link.path}
                        style={{
                            backgroundColor: link.path === pathname ? 'blue' : '',
                            borderRadius: '8px',
                            padding: '8px',
                            textDecoration: 'none',
                            color: link.path === pathname ? 'rgb(253, 253, 253)' : '#22559c',
                        }}
                        to={link.path}>
                        {link.label}
                    </Link>))}

            </nav>
        </header>
    );
};
