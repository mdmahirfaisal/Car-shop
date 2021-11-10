import './Banner.css';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import React from 'react';

const Banner = () => {
    return (
        <div id="banner" className="banner-bg py-5">
            <div className="container ">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-12 col-md-4 text-start">
                        <Fade left duration={2500} distance="50px">
                            <div className="py-3">
                                <h5 className=" ">Expensive sport Cars </h5>
                                <h1 className=" fw-bold">We are a reliable partner</h1>

                                <p className="text-secondary"><Bounce right cascade>At our dealership, we have devoted ourselves to helping and serving our customers to the best of our ability. We believe the cars we offer are the highest quality and ideal for your life needs. We understand that you rely on our web site for accurate information.!! </Bounce></p> <br />

                                <Link to="/allProducts"><button className="btn btn-outline-info fs-5 p-3 rounded-pill">Find Products</button></Link>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-sm-12 col-md-8">
                        <Fade right duration={2500} distance="50px">
                            <div className="img-bg-color">
                                <img className="img-fluid " src="https://i.ibb.co/16Mpvm3/banner-img-removebg-preview.png" alt="banner img" />
                            </div>
                        </Fade>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;