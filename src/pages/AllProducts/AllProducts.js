import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import NavMenu from '../Shared/NavMenu/NavMenu';

const AllProducts = () => {
    const [showProducts, setShowProducts] = useState([]);
    // const {isLoading, setIsLoading}=useAuth();


    useEffect(() => {
        // setIsLoading(true);
        fetch('https://secure-stream-98279.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setShowProducts(data);
                // setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    return (
        <>
            <NavMenu></NavMenu>
            <div className="pt-5" style={{ backgroundColor: "#ffcccc" }}>
                <div className="container">
                    <h1 className="fw-bold text-info my-4">TOTAL AVAILABLE PRODUCTS</h1>

                    <div className="row shadow-sm p-3">
                        {
                            showProducts?.map(product => <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 " key={product._id}>

                                <Card style={{ cursor: 'pointer' }}
                                    className="border-0 h-100 card-background"
                                >
                                    <Card.Img variant="top" src={product.img} className="img-fluid p-3 service-image" style={{ height: "" }} />
                                    <Card.Body className="pt-0">
                                        <Card.Title as="h5" className="">{product.name}</Card.Title>
                                        <Card.Title as="h4" className=" text-danger"><i className="fas fa-dollar-sign"></i> {product.price}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;