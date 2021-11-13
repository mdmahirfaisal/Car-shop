import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import useAuth from '../../../hooks/useAuth';



const tableStyle = {
    borderRight: '1px solid gray'
}


const ManageOrders = () => {
    const [allOrders, setAllOrders] = React.useState([]);
    const { user } = useAuth();

    React.useEffect(() => {
        fetch('https://lit-citadel-97865.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
            .catch(error => {

            })
    }, []);
    console.log(allOrders);



    return (
        <div>
            <div className="container">
                <h1 className="fw-bold text-secondary">MANAGE ORDERS</h1>
                <Paper sx={{ width: '100%', overflow: 'hidden', }}>
                    <TableContainer sx={{ maxHeight: 700, backgroundColor: '#f5f6fa' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="left">Image</TableCell>
                                    <TableCell style={tableStyle} align="left">Name</TableCell>
                                    <TableCell style={tableStyle} align="left">Product</TableCell>
                                    <TableCell style={tableStyle} align="left">$ Price</TableCell>
                                    <TableCell align="left">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allOrders.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={tableStyle} align="left"><img src={row.img} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} component="th" scope="row">
                                            {user.displayName}
                                        </TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row.name} <br /> <small className="text-dark">{new Date(row.orderTime).toDateString()}</small> </TableCell>
                                        <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row.price}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-info bg-light" align="left">

                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                    status
                                                </InputLabel>
                                                <NativeSelect
                                                    defaultValue={row.status}
                                                    inputProps={{
                                                        name: 'status',
                                                    }}
                                                >
                                                    <option className="bg-success" value={10}>pending</option>
                                                    <option className="bg-info" value={20}>approve</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>

        </div>
    );
};

export default ManageOrders;