import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div id="about" className=" pt-5">
            <div className="container">
                <Fade bottom duration={2500} distance="50px">
                    <h2 className="text-info"><strong>ABOUT US</strong> </h2>
                </Fade>
                <div className="row d-md-flex align-items-center">
                    <div className="col-md-8">
                        <Fade bottom duration={2500} distance="50px">
                            <div className="py-3">
                                <img className="img-fluid" src="https://i.ibb.co/VmGDryY/about-bg-removebg-preview.png" alt="" />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-4 py-3">
                        <Fade bottom duration={2500} distance="50px">
                            <div className="text-start">
                                <h4 className="text-info fw-bold">WHY CHOOSE OUR SHOP?</h4>
                                <p className="text-secondary"><i>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing.

                                    At our dealership, we have devoted ourselves to helping and serving our customers to the best of our ability. We believe the cars we offer are the highest quality and ideal for your life needs. We understand that you rely on  inquiries in a timely fashion. We look forward to doing business with you!.</i></p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;