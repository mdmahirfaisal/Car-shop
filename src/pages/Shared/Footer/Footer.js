import React from 'react';
import { Card } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1e272e' }}>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-4">
                        <Card style={{ backgroundColor: '#2C3A47', marginTop: '-50px' }} className="shadow">
                            <Card.Img variant="top" src="https://i.ibb.co/syHL06v/654-removebg-preview.png" />
                            <Card.Title className="text-light" >Super car shop</Card.Title>
                            <Card.Body>
                                <Card.Text className="text-light w-75 mx-auto
                                ">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </Card.Text>
                                <div className="pb-4">
                                    <h3 className="text-light text-start">Follow us</h3>

                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#3b5998' }} to="/home#banner"><i className="fab fa-facebook"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5  btn btn-light px-2" style={{ color: '#55acee' }} to="/home#banner"><i className="fab fa-twitter"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#dd4b39' }} to="/home#banner"><i className="fab fa-google"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#0976b4' }} to="/home#banner"><i className="fab fa-linkedin-in"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#6f42c1' }} to="/home#banner"><i className="fab fa-instagram"></i></HashLink>


                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-4 mt-5">
                        <div className="d-flex">
                            <h1><i className="fas fa-map-marked-alt text-danger me-3"></i></h1>
                            <div>
                                <h4 className="text-light fw-bold">Rajshahi,Bangladesh</h4>
                                <p className="text-white">Baya Bazar, Rajshahi</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-light mt-5">Use link</h2>
                            <div className="d-flex text-start">
                                <div>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> About us</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Products</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Projects</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Our Team</p></HashLink>
                                </div>
                                <div>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Contact us</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Blog</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Testimonials</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 text-secondary"> Faq</p></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mt-5">
                        <div className="d-flex">
                            <h1><i className="fas fa-phone-volume text-danger me-3"></i></h1>
                            <div>
                                <h4 className="text-light fw-bold">+880 01928-XXXXXX</h4>
                                <p className="text-white">Give us call</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-light mt-5">Subscribe</h2>
                            <p className="text-light">Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                        </div>
                        <div className="text-end mt-5" style={{ maxHeight: '80px' }}>
                            <img src="https://i.ibb.co/D1gYjbd/logo.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;