import React from 'react';
import './ProductBanner.css';
import { Carousel } from 'react-bootstrap';





const ProductBanner = () => {
    return (
        <div className="mb-5">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/BZqfPbb/64382.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger fw-bold">Red-Elegant-Convertible-Car</h1>
                        <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/bm4gjcW/67366.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger fw-bold">Gray-Elegant-Convertible-Car</h1>
                        <p className="text-dark">Pharetra augue mollis, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/yB1Nmsr/67354.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger fw-bold">Blue-Elegant-Convertible-Car</h1>
                        <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ProductBanner;