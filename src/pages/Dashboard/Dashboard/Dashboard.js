import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton, } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import Bookings from '../Bookings/Bookings';
import ManageOrders from '../ManageOrders/ManageOrders';
import Pay from '../Pay/Pay';
import Profile from '../Profile/Profile';
import AddReview from './AddReview/AddReview';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import ManageProducts from '../ManageProducts/ManageProducts';




const drawerWidth = 220;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory();

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dashboardLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                history.push('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }

    const drawer = (
        <div className=" side-navbar">
            <Toolbar />
            <Divider />
            <Box className="text-start ms-2">




                {admin && <Box>
                    <Link to={`${url}/dashboard`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"> <Button color="inherit"><i className="fas fa-user-circle fs-5 me-2 text-dark"></i> Profile</Button></Link><br />

                    <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"><Button color="inherit"><i className="fas fa-users-cog fs-5 me-2 text-dark"></i> Manage orders</Button></Link><br />

                    <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"><Button color="inherit"><i className="fas fa-cogs fs-5 me-2 text-dark"></i> Manage products</Button></Link><br />

                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"><Button color="inherit"><i className="fas fa-user-shield fs-5 me-2 text-dark"></i> Make Admin</Button></Link><br />


                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"><Button color="inherit"><i className="fas fa-plus-circle fs-5 me-2 text-dark"></i> Add Product</Button></Link>
                </Box>}

                {!admin && <Box>
                    <Link to="/allProducts" style={{ textDecoration: 'none', color: 'black' }}>  <Button className="fs-6  mt-3" color="inherit"><i className="fas fa-cart-plus fs-5 me-2 text-dark"></i> Products</Button></Link><br />


                    <Link to={`${url}/dashboard`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"> <Button color="inherit"><i className="fas fa-user-circle fs-5 me-2 text-dark"></i> Profile</Button></Link><br />


                    <Link to={`${url}/bookings`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"><Button color="inherit"><i className="fas fa-list-ul fs-5 me-2 text-dark"></i> Booking List</Button></Link><br />


                    <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: 'black' }} className="mt-3"> <Button color="inherit"><i className="fab fa-amazon-pay fs-5 me-2 text-dark fw-bold"></i>   Pay now</Button></Link><br />


                    <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: 'black' }} className="mt-4"> <Button color="inherit"><i className="fas fa-comment-dots fs-5 me-2 text-dark fw-bold"></i> Review</Button></Link><br />
                </Box>}



            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                className="shadow-sm bg-light text-danger"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div><img src="https://i.ibb.co/D1gYjbd/logo.png" style={{ height: '35px' }} alt="" /></div>
                    <Typography variant="h5" className="ms-3" noWrap component="div">
                        Super Car Shop
                    </Typography>
                    <Typography noWrap component="div">
                        <NavLink className="ms-3 text-decoration-none text-dark" to="/home"><Button variant="text">Back to Home</Button></NavLink>
                    </Typography>
                    <Typography noWrap component="div">
                        <Button onClick={dashboardLogout} variant="text">Logout</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box className="dashboard-container"
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/dashboard`}>
                        <Profile></Profile>
                    </Route>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>


                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>

                    <Route path={`${path}/bookings`}>
                        <Bookings></Bookings>
                    </Route>


                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>


                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>


                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <Route exact path={`${path}/`}>
                        <Profile></Profile>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
