import { Container, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import Flip from 'react-reveal/Flip';


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser, loading, user, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    console.log(registerData);

    const handleLoginSubmit = (e) => {
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }

    return (
        <>
            <div className="login-bg  d-flex align-items-center justify-content-center">
                <NavMenu></NavMenu>
                <Container>
                    {loading && <CircularProgress sx={{ mt: 5 }} />}
                    <Flip bottom duration={1500}>
                        <div className=" py-3 shadow-lg mx-auto" style={{ borderRadius: '25px', backgroundColor: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px' }}>
                            <Typography className="text-info fw-bold" variant="h4">Please Register</Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="name" onBlur={handleOnBlur} label="Your Name" variant="standard" required /> <br />

                                <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" type="email" onBlur={handleOnBlur} label="Your Email" variant="standard" required /> <br />

                                <TextField sx={{ width: '75%', m: 1 }} id="standard-password-input" name="password" onBlur={handleOnBlur} label="Your Password"
                                    type="password"
                                    variant="standard" /> <br />

                                <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">REGISTER</Button>

                                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ width: '75%', m: 1 }} variant="text">ALL READY REGISTERED ? <span className="text-danger ms-2">PLEASE LOGIN</span> </Button>
                                </NavLink>
                                {user.email && <Alert severity="success" color="success">
                                    New User Created Successfully
                                </Alert>}
                                {authError && <Alert severity="error" color="warning">{authError}</Alert>}
                            </form>
                        </div>
                    </Flip>

                </Container>
            </div>
        </>
    );
};

export default Register;