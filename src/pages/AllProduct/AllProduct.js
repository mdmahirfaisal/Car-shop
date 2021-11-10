import React from 'react';
import { Card } from 'react-bootstrap';
import ProductsModal from '../ProductsModal/ProductsModal';

const AllProduct = ({ product }) => {
    const { name, price, img, description } = product;

    const [modalOpenPd, setModalOpenPd] = React.useState(false);
    const pdModalOpen = () => setModalOpenPd(true);
    const pdModalClose = () => setModalOpenPd(false);


    return (
        <>
            <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
                <Card onClick={pdModalOpen} style={{ cursor: 'pointer' }}
                    className="border-0 h-100 card-background"
                >
                    <Card.Img variant="top" src={img} className="img-fluid p-3 service-image" style={{ height: "" }} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h5" className="">{name}</Card.Title>
                        <Card.Title as="h4" className=" text-danger"><i className="fas fa-dollar-sign"></i> {price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <ProductsModal
                modalOpenPd={modalOpenPd}
                pdModalClose={pdModalClose}
                product={product}
            ></ProductsModal>
        </>
    );
};

export default AllProduct;