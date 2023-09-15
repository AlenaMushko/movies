import {createTheme} from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#03071f',
        },
        info: {
            main: 'rgba(210,222,245,0.67)',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
        text: {
            primary: '#03071f',
            secondary: 'rgb(43,19,131)'
        },
    },
    typography: {
        span: {
            fontSize: 20,
            fontWeight: 600,
            marginRight: '12px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'color 0.5s ease',
                    '&:hover': {
                        background: '#a399ca',
                    },
                },
            },
        },
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f5f5f5',
        },
        info: {
            main: '#3b9fed',
        },
        background: {
            default: '#151223',
            paper: '#261d4a',
        },
        text: {
            primary: '#f5f5f5',
            secondary: 'rgb(197,191,222)'
        },
    },
    typography: {
        span: {
            fontSize: 20,
            fontWeight: 600,
            marginRight: '12px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'color 0.5s ease',
                    '&:hover': {
                        color: '#9c8bdf',
                    },
                },
            },
        },

    },
});


declare module '@mui/material/styles' {
    interface TypographyVariants {
        span: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        span?: React.CSSProperties;
    }
}


declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        span: true;
    }
}

export {darkTheme, lightTheme};
