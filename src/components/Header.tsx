import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Box, Button, useTheme} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import {Link as MuiLink} from '@mui/material';

import Logo1 from '../assets/logo1x.png';
import Logo2 from '../assets/logo2x.png';
import Logo3 from '../assets/logo3x.png';
import {AppRoutes} from "../routing";
import {ThemeToggleButton} from "../themes/ThemeToggleBtn";
import {UserInfo} from "./UserInfo";
import {useAppSelector} from "../hooks/reduxHooks";

export const Header: React.FC = () => {
    const themeStyles = useTheme();
    const {theme} = useAppSelector(state => state.movies);
    const navigate = useNavigate();

    const user = sessionStorage.getItem('userName')

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
            path: AppRoutes.ANIMATION,
            label: 'Animation'
        }
    ]
    const {pathname} = useLocation();

    const handleLogout = async () => {
        try {
            window.sessionStorage.setItem('userName', '')
            await navigate('/login');
        } catch (error) {
            console.error('An error occurred during logout:', error);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '25px ',
            alignItems: 'center',
            background: theme === 'light' && 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(38,29,74,0.7203475140056023) 100%)',
            [themeStyles.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'center',
            }
        }}>
            <Box sx={{
                [themeStyles.breakpoints.down('sm')]: {
                    display: 'none'
                }
            }}>
                <img width={35} height={40}
                     src={Logo1}
                     srcSet={`${Logo2} 2x, ${Logo3} 3x`}
                     alt="logo"
                     loading="lazy"
                     style={{transform: 'rotate(90deg)'}}

                />
            </Box>

            <Box sx={{
                [themeStyles.breakpoints.down('sm')]: {
                    display: 'flex', alignItems: 'center', gap: '50vw', marginBottom: '20px'
                }
            }}>
                <Box sx={{
                    display: 'flex', gap: '10vw',
                    [themeStyles.breakpoints.up('sm')]: {
                        display: 'none'
                    }
                }}>
                    {user ? (<>
                            <Button variant="outlined" onClick={handleLogout}>LOG OUT</Button>
                            <UserInfo/>
                        </>
                    ) : (<>
                            <Button variant="outlined" onClick={() => navigate(AppRoutes.REGISTER)}>REGISTER</Button>
                            <Button variant="outlined" onClick={() => navigate(AppRoutes.LOG_IN)}>LOG IN</Button>
                        </>
                    )}
                    <ThemeToggleButton/>
                </Box>
            </Box>

            {user && <nav style={{display: 'flex', gap: '3vw'}}>
                {links.map((link) => (
                    <MuiLink component={RouterLink}
                             key={link.path}
                             to={link.path}
                             sx={{
                                 background: link.path === pathname ? 'linear-gradient(90deg, rgba(135,206,250,1) 10%, rgba(119,95,216,0.759563200280112) 100%)' : '',
                                 borderRadius: '8px',
                                 padding: '8px',
                                 textDecoration: 'none',
                                 color: link.path === pathname ? '#261d4a' : themeStyles.palette.text.primary,
                                 transition: 'boxShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                 "&:hover": {
                                     boxShadow: "0px 8px 43px #775fd8"
                                 }
                             }}
                    >
                        {link.label}
                    </MuiLink>
                ))}
            </nav>}

            <Box sx={{
                display: 'flex', gap: '2vw', alignItems: 'center',
                [themeStyles.breakpoints.down('sm')]: {
                    display: 'none'
                }
            }}>
                {user ? (<>
                        <Button variant="outlined" onClick={handleLogout}>LOG OUT</Button>
                        <UserInfo/>
                    </>
                ) : (<>
                    <Button variant="outlined" onClick={() => navigate(AppRoutes.REGISTER)}>REGISTER</Button>
                    <Button variant="outlined" onClick={() => navigate(AppRoutes.LOG_IN)}>LOG IN</Button>
                </>)}

                <ThemeToggleButton/>
            </Box>
        </Box>
    );
};
