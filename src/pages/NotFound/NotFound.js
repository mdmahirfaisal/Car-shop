import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container ">
            <div className="row mt-5 pt-5 ">
                <div className="col">
                    <div className="shadow bg-light p-3 rounded mb-4k">
                        <h1 className="text-danger fw-bold">404</h1>
                        <h2 className="text-danger">Page Not Found</h2>
                        <Link to="/home"><button className="btn btn-danger w-50 rounded-pill py-2 fs-5">Back to home</button></Link>
                    </div>
                    <div className="shadow p-3"><img className="img-fluid" src="https://i.ibb.co/7XQC16Q/HTML-404-Error-Page.gif" alt="" /></div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;