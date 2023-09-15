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
        try {
            const existingUser = await supabase
                .from('users')
                .select('email')
                .eq('email', user.email)
                .single();

            if (existingUser?.data?.email === user.email) {
                setAlertMessage('A user with this email already exists.')
                return;
            } else {
                const {data, error} = await supabase
                    .from('users')
                    .insert({
                        name: user.name,
                        email: user.email,
                        password: user.password
                    });

                if (error) {
                    throw error;
                }
                setAlertMessage('Please register');
                navigate(AppRoutes.LOG_IN);
                reset();
            }

        } catch (error) {
            console.log(error);
            setAlertMessage('Something went wrong. Try again');
        }
    };

    console.log('alertMessage', alertMessage)
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

