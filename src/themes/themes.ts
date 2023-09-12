import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#03071f',
        },
        info: {
            main: '#fff',
        },
        background: {
            default: '#fff',
            paper:'#fff',
        },
        text: {
            primary: '#03071f',
            secondary: '#ffd54f',
            disabled: '#052a0b',
        },
    },
    typography:{
        span: {
            fontSize: 20,
            fontWeight: 600,
            marginRight:'12px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'color 0.5s ease',
                    '&:hover': {
                        color: '#775fd8',
                    },
                },
            },
        },
}});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f5f5f5',
        },
        info: {
            main: '#775fd8',
        },
        background: {
            default: '#151223',
            paper: '#261d4a',
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#ffd54f',
            disabled: '#79a4eb',
        },
    },
    typography:{
        span: {
            fontSize: 20,
            fontWeight: 600,
            marginRight:'12px',
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
    }
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

export { darkTheme, lightTheme };
