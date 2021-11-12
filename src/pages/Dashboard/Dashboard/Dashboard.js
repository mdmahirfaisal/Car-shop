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



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className=" side-navbar">
            <Toolbar />
            <Divider />
            <Box className="text-start ms-5">
                <Link to="/allProducts" style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Products</Button></Link><br />
                <Link to={`${url}/dashboard`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Dashboard</Button></Link><br />
                <Link to={`${url}/bookings`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Booking List</Button></Link><br />
                <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Manage orders</Button></Link><br />
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Make Admin</Button></Link><br />
                <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Add Product</Button></Link>
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
                        <NavLink className="ms-3 text-decoration-none" to="/home"><Button variant="text">Back to Home</Button></NavLink>
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
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>

                    </Route>

                    <Route path={`${path}/bookings`}>
                        <Bookings></Bookings>
                    </Route>


                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>


                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
