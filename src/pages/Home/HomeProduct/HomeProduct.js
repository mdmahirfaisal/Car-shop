import React from 'react';
import './HomeProduct.css';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2'

import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';


const HomeProduct = ({ product }) => {
    const { name, price, img, description, _id } = product;
    const { user } = useAuth();
    const history = useHistory();

    const handlePlaceOrder = (id) => {
        if (user?.email) {
            history.push(`/placeOrder/${id}`)
        }
        else {
            Swal.fire({
                title: 'File Not Opened',
                text: "Please Login first",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Open Login Form'
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/login')
                    Swal.fire(
                        'Login Form Opened',
                        'Login page opened successfully.',
                        'success'
                    )
                }
            })
        }
    }

    return (
        <>
            <Fade bottom duration={3000} distance="50px">
                <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
                    <Card onClick={() => handlePlaceOrder(_id)} style={{ cursor: 'pointer' }}
                        className="border-0 h-100 card-background"
                    >
                        <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" style={{ height: "" }} />
                        <Card.Body className="pt-0">
                            <Card.Title as="h5" className="">{name}</Card.Title>
                            <Card.Title as="h4" className=" text-danger"><i className="fas fa-dollar-sign"></i> {price}</Card.Title>
                            <p>{description}</p>
                        </Card.Body>
                    </Card>
                </div>
            </Fade>
        </>
    );
};

export default HomeProduct;