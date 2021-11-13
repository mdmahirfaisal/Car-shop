import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Rating from '@mui/material/Rating';




const ReviewList = ({ review }) => {
    const { name, email, message, photoURl, rating } = review;
    return (

        <Fade bottom duration={3000} distance="50px">
            <div className="mb-4 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
                <Card
                    className="border-0 h-100 card-background"
                >
                    <Card.Img variant="top" src={photoURl} className="img-fluid p-3 service-image" style={{ height: "" }} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h4" className="">{name}</Card.Title>
                        <Card.Title as="h6" className="">{email}</Card.Title>
                        <Card.Title as="p" className=" text-danger"> <Rating name="size-medium" defaultValue={rating || 3} /> </Card.Title>
                        <Card.Text>
                            {message}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fade>

    );
};

export default ReviewList;