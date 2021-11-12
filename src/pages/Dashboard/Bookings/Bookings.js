import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../hooks/useAuth';

const tableStyle = {
    borderRight: '1px solid gray'
}


const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = React.useState([]);

    React.useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(error => console.log(error))

    }, [user]);

    return (
        <div style={{ backgroundColor: '#dfe4ea', padding: '' }} >
            <h1 className="fw-bold text-danger py-3">MY ORDERS</h1>
            <Paper sx={{ width: '100%', overflow: 'hidden', }}>
                <TableContainer sx={{ maxHeight: 600, backgroundColor: '#fff' }}>
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
                            {bookings.map((row) => (
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
                                    <TableCell className="fw-bold fs-5 text-info bg-light" align="left">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </div>
    );
};

export default Bookings;