import { Container, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    // const { registerUser, loading, user, authError } = useAuth();
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


        // registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            {/* {loading && <CircularProgress sx={{ mt: 5 }} />} */}
            <Typography variant="h6">Register</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="name" onBlur={handleOnBlur} label="Your Name" variant="standard" required /> <br />

                <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" type="email" onBlur={handleOnBlur} label="Your Email" variant="standard" required /> <br />

                <TextField sx={{ width: '75%', m: 1 }} id="standard-password-input" name="password" onBlur={handleOnBlur} label="Your Password"
                    type="password"
                    variant="standard" /> <br />

                <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">REGISTER</Button>

                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '75%', m: 1 }} variant="text">ALL READY REGISTERED? PLEASE LOGIN</Button>
                </NavLink>
            </form>


            {/* {user.email && <Alert severity="success" color="success">
                        New User Created Successfully
                    </Alert>}
                    {authError && <Alert severity="error" color="warning">{authError}</Alert>} */}



        </Container>
    );
};

export default Register;