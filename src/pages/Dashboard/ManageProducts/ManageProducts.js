import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Swal from 'sweetalert2'

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const tableStyle = {
    borderRight: '1px solid gray'
}


const ManageProducts = () => {

    const [manageProductsAdmin, setManageProductsAdmin] = React.useState([]);

    React.useEffect(() => {
        fetch('https://lit-citadel-97865.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProductsAdmin(data))
            .catch(error => Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: `Set to ${error}`,
                showConfirmButton: false,
                timer: 3000
            }));
    }, []);


    // handle delete 
    const handleDeleteProduct = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://lit-citadel-97865.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = manageProductsAdmin.filter(managePd => managePd._id !== id);
                            setManageProductsAdmin(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })


    };








    return (
        <div>
            <div className="container">
                <h1 className="fw-bold text-primary py-4">MANAGE PRODUCTS</h1>
                <Paper sx={{ width: '100%', overflow: 'hidden', }}>
                    <TableContainer sx={{ maxHeight: 750, backgroundColor: '#f5f6fa' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="left">Image</TableCell>
                                    <TableCell style={tableStyle} align="left">Product</TableCell>
                                    <TableCell style={tableStyle} align="left">Description</TableCell>
                                    <TableCell style={tableStyle} align="left">$ Price</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageProductsAdmin?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell style={tableStyle} align="left"><img src={row?.img} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.name} <br />{console.log(row.name)}</TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.description.slice(0, 50)} <br />{console.log(row.name)}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row?.price}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-info bg-light" align="left">
                                            <button className="btn btn-danger rounded-pill mb-2 py-0 px-3" onClick={() => handleDeleteProduct(row?._id)}> Delete</button>
                                            <button className="btn btn-info rounded-pill mb-2 py-0 px-3"> Update</button>

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

export default ManageProducts;