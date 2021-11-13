import React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'
import { Card, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';



const style = {
    position: 'absolute',
    borderRadius: '20px',
    width: '80%',
    top: '50%',
    left: '50%',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 20,
    p: 4,
};

const ProductsModal = ({ modalOpenPd, pdModalClose, product }) => {
    const { user } = useAuth();


    const { name, price, img, description } = product;
    const addOrder = {
        name,
        price,
        img,
        description
    };

    /// Add order to database
    const userData = { status: 'panging', name: user.displayName, email: user.email };

    const handlePlaceOrder = () => {
        const newOrder = { ...userData, ...addOrder, orderTime: new Date() };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Yes...',
                    text: 'Your order placed successfully',
                    footer: ''
                })
                pdModalClose();
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalOpenPd}
            onClose={pdModalClose}
            closeAfterTransition
            style={{ backgroundColor: 'lightgrey' }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
            <Fade in={modalOpenPd}>
                <Box sx={style}>

                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>

                        <Container>
                            <h2 className="text-secondary fw-bold mb-1 text-center">CHECK OUT</h2>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <Card className="h-100 shadow-sm">
                                        <Card.Img variant="top" src={img} style={{ height: "" }} />
                                        <Card.Body className="px-3">
                                            <Card.Title className="fw-bold  text-danger fs-4">{name}</Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="shadow px-4 pt-2 my-3" style={{ borderRadius: "15px" }}>
                                        <Table hover responsive>
                                            <thead>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{user.email}</td>
                                                    <td>1</td>
                                                    <td>$ {price}</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2">Total</td>
                                                    <td>$ {price}</td>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                    <button onClick={handlePlaceOrder} className=" btn btn-danger w-100 rounded-pill">Checkout</button>
                                </div>
                            </div>
                        </Container>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProductsModal;