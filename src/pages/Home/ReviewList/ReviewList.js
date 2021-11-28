import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


const ReviewList = ({ review }) => {
    const { name, email, description, address, ratings, img } = review;
    return (
        <Paper elevation={20} style={{ minHeight: '280px' }}>

            <Card
                className="border-0 h-100"
            >
                <Card.Img variant="top" src={img} className="img-fluid rounded-circle py-2 mx-auto mb-3" style={{ height: "30%", width: '30%' }} />
                <Card.Body className="pt-0">
                    <Card.Title as="h5" className="fw-bold">{name}</Card.Title>
                    <Card.Title as="h6" className="">{email}</Card.Title>
                    <Card.Title as="h5" className=" text-danger">  <Rating name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly />
                    </Card.Title>
                    <Card.Text className="m-0 p-0">Address: <i>{address}</i></Card.Text>
                    <Card.Text className="">
                        <small>{description.slice(0, 100)}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Paper>
    );
};

export default ReviewList;