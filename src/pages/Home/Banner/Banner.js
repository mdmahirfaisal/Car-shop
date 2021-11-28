import './Banner.css';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import React from 'react';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";


const Banner = () => {
    const history = useHistory();
    const handleClick = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to see all the products?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'View all products !!!'
        }).then((result) => {
            if (result.isConfirmed) {
                history.push("/allProducts");
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Available Products Opened',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    };

    return (
        <div id="banner" className="banner-bg py-5" >
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-12 col-md-4 text-start">
                        <Fade left duration={2500} distance="50px">
                            <div className="py-3">
                                <h5 className=" ">Expensive sport Cars </h5>
                                <h1 className=" fw-bold">We are a reliable partner</h1>

                                <Typography className="text-secondary"><Bounce right cascade>At our dealership, we have devoted ourselves to helping and serving our customers to the best of our ability. We believe the cars we offer are the highest quality and ideal for your life needs. We understand that you rely on our web site for accurate information.!! </Bounce></Typography><br />

                                <button onClick={handleClick} className="btn btn-outline-info fs-5 p-3 rounded-pill">More Products <i className="fas fa-angle-double-right"></i></button>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-sm-12 col-md-8">
                        <Fade right duration={2500} distance="50px">
                            <div className="img-bg-color">
                                <img style={{ margin: '100px 0 ' }} className="img-fluid " src="https://i.ibb.co/16Mpvm3/banner-img-removebg-preview.png" alt="banner img" />
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;