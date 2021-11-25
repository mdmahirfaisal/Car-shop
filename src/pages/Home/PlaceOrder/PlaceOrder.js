import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import { TextField, Button, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import Footer from '../../Shared/Footer/Footer';



const PlaceOrder = () => {
    const { orderId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [productUpload, setProductUpload] = useState(false);

    // load single form specific ID
    useEffect(() => {
        fetch(`https://lit-citadel-97865.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => {
                console.log(error);
            })
    }, [orderId]);



    const { name, price, img, description } = product;
    const addOrder = {
        name,
        price,
        img,
        description
    };

    /// Add order to database
    const handlePlaceOrder = (data) => {

        const userData = { status: 'pending', name: user.displayName, email: user.email, phone: data.phone, address: data.address };

        const newOrder = { ...userData, ...addOrder, orderTime: new Date() };
        setProductUpload(true)
        fetch('https://lit-citadel-97865.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                setProductUpload(false)
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Yes...',
                    text: 'Your order placed successfully',
                })

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `${error}`,
                })
            })
    };


    return (
        <>
            <NavMenu></NavMenu>
            <div style={{ marginTop: '120px' }} className="place-order-container">
                <h1 className="text-secondary bg-light py-5 fw-bold mb-5 text-center">CHECK OUT</h1>
                {productUpload && <CircularProgress></CircularProgress>}
                <Container>
                    <div>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <Card className="h-100 shadow border-0" style={{ borderRadius: "15px" }} >
                                    <Card.Img variant="top" src={img} style={{ minHeight: "200px", padding: '10px 20px' }} />
                                    <Card.Body className="px-3">
                                        <Card.Title className="fw-bold  text-danger fs-4">{name}</Card.Title>
                                        <Card.Title className="fw-bold  text-danger text-danger fs-4">$ {price}</Card.Title>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-sm-12 col-md-7">
                                <div className="shadow px-4 py-5 mt-sm-4" style={{ borderRadius: "15px" }}>
                                    <form onSubmit={handleSubmit(handlePlaceOrder)} className="d-flex flex-column w-100 h-100  p-3 ">
                                        <TextField variant="standard" placeholder="Name" fullWidth type="text" {...register("name", { required: true, maxLength: 40 })} label="Name" defaultValue={user?.displayName || ''} /> <br /> <br />
                                        <TextField variant="standard" placeholder="Email" fullWidth type="email" {...register("email", { required: true })} label="Email" defaultValue={user?.email || ''} /> <br /> <br />
                                        <TextField variant="standard" label="Phone" fullWidth  {...register("phone")} /> <br /> <br />

                                        <TextField variant="standard" fullWidth {...register("address", { required: true })} label="Address" defaultValue={""} /> <br /> <br />
                                        <Button type="submit" variant="contained" className=" w-100  rounded-pill"> Place order</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;