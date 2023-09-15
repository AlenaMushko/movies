import {Button, FormControl, TextField, Typography, useTheme} from '@mui/material';
import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {useForm} from "react-hook-form";
import {MyContainer} from './MyContainer';
import {joiResolver} from "@hookform/resolvers/joi";

import {ILogin} from "../../interfaces";
import {LoginValidators} from "../../validators";
import supabase from "../../supabaseClient";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../redux/slices/authSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";

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

    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [alertMessage, setAlertMessage] = useState<string>('Please login');
    const navigate = useNavigate();

    const handleLogin = async (user: ILogin) => {
        setAlertMessage('Please wait, the information is being verified.');

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
                dispatch(authActions.setUser(data[0]));
            } else {
                setAlertMessage("incorrect login or password");
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
            setAlertMessage('Something went wrong. Try again');
        } finally {
            setTimeout(() => {
                setAlertMessage('Please login');
            }, 3000)
        }
    };

    return (
        <MyContainer>
            <Typography variant="h5" sx={{
                marginBottom: '20px',
                padding: '12px',
                color: theme.palette.text.secondary,
                textDecoration: 'underline'
            }}> {alertMessage}</Typography>

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

