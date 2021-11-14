import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


const ReviewList = ({ review }) => {
    const { name, email, message, userImg, rating } = review;
    console.log(userImg);
    return (
        <Paper elevation={20} style={{ minHeight: '200px' }}>

            <Card
                className="border-0 h-100"
            >
                <Card.Img variant="top" src={userImg} className="img-fluid p-3 service-image" style={{ height: "" }} />
                <Card.Body className="pt-0">
                    <Card.Title as="h4" className="">{name}</Card.Title>
                    <Card.Title as="h6" className="">{email}</Card.Title>
                    <Card.Title as="p" className=" text-danger"> <Rating name="size-medium" defaultValue={rating || 3} /> </Card.Title>
                    <Card.Text>
                        {message}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Paper>
    );
};

export default ReviewList;