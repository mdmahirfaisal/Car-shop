import * as React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, CircularProgress, TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import Flip from 'react-reveal/Flip';





const Login = () => {
    const { user, loginUser, authError, loading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();

    const handleLoginSubmit = (data) => {

        loginUser(data.email, data.password, location, history)
        reset()
    };

    //// Login with google 
    const handleGoogleLogin = () => {

        signInWithGoogle(location, history);
    };

    const admin = 'admin@gmail.com';
    const password = 123456;

    const advice = () => {
        let timerInterval
        Swal.fire({
            position: 'top',
            title: 'Login as admin',
            html: 'You can check by logging in as an administrator with this email',
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                // console.log('I was closed by the timer')
            }
        })
    };

    if (user.email) {
    }
    else {
        advice();
    }

    return (
        <>
            <div className="login-bg  d-flex align-items-center justify-content-center">
                <NavMenu></NavMenu>
                <div className="container">
                    {loading && <CircularProgress sx={{ mt: 5 }} />}
                    <Flip bottom duration={1500}>
                        <div className=" py-3 shadow-lg mx-auto" style={{ borderRadius: '25px', backgroundColor: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px' }}>
                            <Typography className="text-info fw-bold" variant="h4">Please Login</Typography>
                            <form onSubmit={handleSubmit(handleLoginSubmit)} className=" text-light">
                                <TextField sx={{ width: '75%', m: 1 }} defaultValue={user.email ? "" : admin} name="email" type="email" {...register("email")} label="Your Email" variant="standard" /> <br />

                                <TextField sx={{ width: '75%', m: 1 }} defaultValue={user.email ? "" : password} name="password" {...register("password")} label="Your Password"
                                    type="password"
                                    variant="standard" /> <br />
                                <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">Login</Button>

                                <NavLink to="/register" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ width: '75%', m: 1 }} variant="text">NEW USER ? <span className="text-danger ms-2">PLEASE REGISTER</span> </Button>
                                </NavLink>

                                {user?.email && <Alert severity="success" color="success">
                                    Login Successfully
                                </Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>
                                }
                                <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleLogin} variant="contained">Google Login</Button>

                            </form>
                        </div>
                    </Flip>
                </div>
            </div>
        </>
    );
};

export default Login;