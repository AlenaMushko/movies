import {Button, FormControl, TextField, Typography, useTheme} from '@mui/material';
import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {useForm} from "react-hook-form";
import {MyContainer} from './MyContainer';
import {joiResolver} from "@hookform/resolvers/joi";

import {ILogin} from "../../interfaces";
import {LoginValidators} from "../../validators";
import supabase from "../../supabaseClient";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<ILogin>({
        mode: 'all',
        resolver: joiResolver(LoginValidators),
    });

    const theme = useTheme();
    const [alert] = useState<string>(() => {
        return (window.localStorage.getItem('alert') ?? 'Please login')
    });
    useState<string>(() => {
        return (window.sessionStorage.getItem('userName') ?? '')
    });
    const navigate = useNavigate();

    useEffect(() => {
        window.localStorage.setItem('alert', 'Please login');
    }, []);

    const handleLogin = async (user: ILogin) => {
        try {
            const {data, error} = await supabase
                .from('users')
                .select('*')
                .eq('email', user.email)
                .eq('password', user.password);

            if (error) {
                throw error;
            }

            if (data && data.length > 0) {
                window.localStorage.setItem('alert', "Please login");
            } else {
                window.localStorage.setItem('alert', "Incorrect login or password");
            }

            reset();
            window.sessionStorage.setItem('userName', data[0]?.name);
            setTimeout(
                () => {
                    window.sessionStorage.removeItem('userName');
                },
                60 * 60 * 1000
            );
            navigate('/')
        } catch (error) {
            console.log(error);
            window.localStorage.setItem('alert', "Incorrect login or password");
        }
    };

    return (
        <MyContainer>
            <Typography variant="h5" sx={{
                marginBottom: '20px',
                padding: '12px',
                color: theme.palette.text.secondary,
                textDecoration: 'underline'
            }}> {alert}</Typography>

            <FormControl
                component="form"
                onSubmit={handleSubmit(handleLogin)}
                sx={{width: '70%', gap: 3}}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message as string}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message as string}
                />

                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon/>}
                    sx={{padding: '12px'}}
                    disabled={!isValid}
                >
                    Login
                </Button>
            </FormControl>
        </MyContainer>
    );
};

