import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useState} from "react";
import {Button, FormControl, TextField, Typography, useTheme} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useNavigate} from "react-router-dom";

import {IRegister} from "../../interfaces";
import {RegisterValidators} from "../../validators";
import {MyContainer} from "./MyContainer";
import supabase from "../../supabaseClient";
import {AppRoutes} from "../../routing";

export const RegisterForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<IRegister>({
        mode: 'all',
        resolver: joiResolver(RegisterValidators),
    });

    const [alertMessage, setAlertMessage] = useState<string>('Please register');
    const navigate = useNavigate();
    const theme = useTheme();
    const handleRegister = async (user: IRegister) => {
        setAlertMessage('Please wait, the information is being verified.');

        try {
            const {data, error} = await supabase.auth.signUp({
                email: user.email,
                password: user.password
            });

            if (error) {
                throw error;
            }
            setAlertMessage('Registration successful!');
            navigate(AppRoutes.LOG_IN);
            reset();
        } catch (error) {
            console.log(error);

            if (error && (error as any).statusCode === 429) {
                setAlertMessage('Email rate limit exceeded');
            } else {
                setAlertMessage('Something went wrong. Try again');
            }
        } finally {
            setTimeout(() => {
                setAlertMessage('Please register');
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
                onSubmit={handleSubmit(handleRegister)}
                sx={{width: '70%', gap: 3}}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button type="submit" variant="contained" endIcon={<SendIcon/>} disabled={!isValid}>
                    Signup
                </Button>
            </FormControl>
        </MyContainer>
    );
};

