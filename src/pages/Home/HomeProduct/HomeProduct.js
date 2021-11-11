import React from 'react';
import './HomeProduct.css';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2'

import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const HomeProduct = ({ product }) => {
    const { name, price, img, } = product;
    const history = useHistory();

    const handleClick = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to see all the products?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'View all products !!!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Opened',
                    'All product pages are opened.',
                    'success'
                )
                history.push("/allProducts");
            }
        })

    }

    return (
        <>
            <Fade bottom duration={3000} distance="50px">
                <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
                    <Card onClick={handleClick} style={{ cursor: 'pointer' }}
                        className="border-0 h-100 card-background"
                    >
                        <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" style={{ height: "" }} />
                        <Card.Body className="pt-0">
                            <Card.Title as="h5" className="">{name}</Card.Title>
                            <Card.Title as="h4" className=" text-danger"><i className="fas fa-dollar-sign"></i> {price}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </Fade>
        </>
    );
};

export default HomeProduct;