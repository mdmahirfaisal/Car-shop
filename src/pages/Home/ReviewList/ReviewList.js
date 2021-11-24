import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


const ReviewList = ({ review }) => {
    const { name, email, message, rating } = review;
    return (
        <Paper elevation={20} style={{ minHeight: '280px' }}>

            <Card
                className="border-0 h-100"
            >
                <Card.Img variant="top" src="" className="img-fluid p-3 service-image" style={{ height: "" }} />
                <Card.Body className="pt-0">
                    <Card.Title as="h4" className="">{name}</Card.Title>
                    <Card.Title as="h6" className="">{email}</Card.Title>
                    <Card.Title as="p" className=" text-danger"> <Rating name="size-medium" defaultValue={parseInt(rating) || 3} /> </Card.Title>
                    <Card.Text>
                        {message}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Paper>
    );
};

export default ReviewList;