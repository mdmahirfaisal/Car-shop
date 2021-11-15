import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import NavMenu from '../../Shared/NavMenu/NavMenu';



const PlaceOrder = () => {
    const { orderId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

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
        fetch('https://lit-citadel-97865.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
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
            <div style={{ marginTop: '120px' }}>
                <Container>
                    <div style={{ backgroundColor: 'light-gray', borderRadius: '40px' }}>
                        <h2 className="text-primary fw-bold mb-5 text-center">CHECK OUT</h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <Card className="h-100 shadow-sm">
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
                                <div className="shadow px-4 pt-2 my-3" style={{ borderRadius: "15px" }}>

                                    <form onSubmit={handleSubmit(handlePlaceOrder)} className="d-flex flex-column w-100 h-100  p-3 form-control">
                                        <TextField placeholder="Name" fullWidth type="text" {...register("name", { required: true, maxLength: 40 })} label="Name" defaultValue={user?.displayName} /> <br /> <br />
                                        <TextField placeholder="Email" fullWidth type="email" {...register("email", { required: true })} label="Email" defaultValue={user?.email} /> <br /> <br />
                                        <TextField placeholder="Phone" fullWidth  {...register("phone")} /> <br /> <br />

                                        <TextField placeholder="Address" fullWidth {...register("address", { required: true })} label="Address" defaultValue={""} /> <br /> <br />
                                        <Button type="submit" variant="contained" className=" w-100  rounded-pill"> Place order</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </>
    );
};

export default PlaceOrder;