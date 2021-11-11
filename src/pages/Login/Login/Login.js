import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';


const Login = ({ loginModalOpen, handleLoginClose }) => {


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

    const handleLoginSubmit = (e) => {
        // loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    };

    //// Login with google 
    const handleGoogleLogin = () => {

        // signInWithGoogle(location, history);
    };


    // const style = {
    //     position: 'absolute',
    //     borderRadius: '20px',
    //     top: '50%',
    //     left: '50%',
    //     border: 'none',
    //     transform: 'translate(-50%, -50%)',
    //     bgcolor: 'background.paper',
    //     boxShadow: 20,
    //     p: 4,
    // };

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










            {/* ----------------------------------------------------------------------------- */}

            {/* <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={loginModalOpen}
                onClose={handleLoginClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 400,
                }}
            >
                <Fade in={loginModalOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">

                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            login system from 
                        </Typography>
                    </Box>
                </Fade>
            </Modal> */}
        </div>
    );
};

export default Login;