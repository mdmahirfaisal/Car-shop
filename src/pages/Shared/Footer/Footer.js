import React from 'react';
import { Card } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1e272e', marginTop: '60px' }}>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-4">
                        <Card style={{ backgroundColor: '#2C3A47', marginTop: '-50px' }} className="shadow">
                            <Card.Img variant="top" style={{}} src="https://i.ibb.co/syHL06v/654-removebg-preview.png" />
                            <Card.Title className="text-light" >Super car shop</Card.Title>
                            <Card.Body>
                                <Card.Text className="text-light w-75 mx-auto
                                ">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </Card.Text>
                                <div className="pb-4">
                                    <h3 className="text-light text-start">Follow us</h3>

                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#3b5998', borderRadius: '' }} to="/home#banner"><i className="fab fa-facebook"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5  btn btn-light px-2" style={{ color: '#55acee', borderRadius: '' }} to="/home#banner"><i className="fab fa-twitter"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#dd4b39', borderRadius: '' }} to="/home#banner"><i className="fab fa-google"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#0976b4', borderRadius: '' }} to="/home#banner"><i className="fab fa-linkedin-in"></i></HashLink>
                                    <HashLink className="mx-1 text-decoration-none fs-5 p-2 btn btn-light px-2" style={{ color: '#6f42c1', borderRadius: '' }} to="/home#banner"><i className="fab fa-instagram"></i></HashLink>


                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-4 mt-5">
                        <div>
                            <h4 className="text-light fw-bold">Rajshahi,Bangladesh</h4>
                            <p className="text-white">Baya Bazar, Rajshahi</p>
                        </div>
                        <div className="">

                        </div>
                    </div>


                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;