import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, CircularProgress, TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavMenu from '../../Shared/NavMenu/NavMenu';


const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    const { user, loginUser, authError, loading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    };

    //// Login with google 
    const handleGoogleLogin = () => {

        signInWithGoogle(location, history);
    };


    return (
        <>
            <NavMenu></NavMenu>
            <div className="container">
                {loading && <CircularProgress sx={{ mt: 5 }} />}
                <div className=" py-4 shadow" style={{ borderRadius: '30px', backgroundColor: '#f1f2f6', marginTop: '100px' }}>
                    <Typography variant="h4">Please Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" type="email" onBlur={handleOnChange} label="Your Email" variant="standard" /> <br />

                        <TextField sx={{ width: '75%', m: 1 }} id="standard-password-input" name="password" onBlur={handleOnChange} label="Your Password"
                            type="password"
                            variant="standard" /> <br />
                        <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">Login</Button>
                        <NavLink to="/register" style={{ textDecoration: 'none' }}>
                            <Button sx={{ width: '75%', m: 1 }} variant="text">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                        {user?.email && <Alert severity="success" color="success">
                            Login Successfully
                        </Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                        <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleLogin} variant="contained">Google Login</Button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;