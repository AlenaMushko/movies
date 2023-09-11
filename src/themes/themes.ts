import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff',
        },
        info: {
            main: '#ffd54f',
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#03071f',
            secondary: '#ffd54f',
            disabled: '#052a0b',
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
});

export { darkTheme, lightTheme };
