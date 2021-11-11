import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    // const { user, loginUser, authError, loading, signInWithGoogle } = useAuth();
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
        // loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    };

    //// Login with google 
    const handleGoogleLogin = () => {

        // signInWithGoogle(location, history);
    };


    return (
        <div>

            <Typography variant="h6">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" type="email" onBlur={handleOnChange} label="Your Email" variant="standard" /> <br />

                <TextField sx={{ width: '75%', m: 1 }} id="standard-password-input" name="password" onBlur={handleOnChange} label="Your Password"
                    type="password"
                    variant="standard" /> <br />
                <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">Login</Button>
                <NavLink to="/register" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '75%', m: 1 }} variant="text">NEW USER? PLEASE REGISTER</Button>
                </NavLink>
                {/* {loading && <CircularProgress />}

                        {user?.email && <Alert severity="success" color="success">
                            Login Successfully
                        </Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>
                        } */}
            </form>
        </div>
    );
};

export default Login;