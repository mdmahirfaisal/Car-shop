
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import AllProduct from '../AllProduct/AllProduct';
import ProductBanner from '../ProductBanner/ProductBanner';
import Footer from '../Shared/Footer/Footer';
import NavMenu from '../Shared/NavMenu/NavMenu';

const AllProducts = () => {
    const [showProducts, setShowProducts] = useState([]);
    const { setLoading } = useAuth();


    useEffect(() => {
        fetch('https://lit-citadel-97865.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setShowProducts(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} check your internet connection`,

                })
            })
            .finally(() => setLoading(false));

    }, [setLoading]);

    return (
        <>
            <NavMenu></NavMenu>
            <ProductBanner></ProductBanner>
            <div className="pt-5 " style={{ backgroundColor: '#ecf0f1' }}>
                <div className="container">
                    <h1 className="fw-bold text-info my-4">TOTAL AVAILABLE PRODUCTS</h1>

                    {<div className="row ">
                        {
                            showProducts?.map(product => <AllProduct
                                key={product?._id}
                                product={product}
                            ></AllProduct>)
                        }
                    </div>}

                </div>
            </div>

            <div style={{ backgroundColor: '#ced6e0' }}>
                <div className="row" style={{ width: '90%', margin: '0 auto' }}>
                    <div className="col-md-4 col-lg-3">
                        <div className="">
                            <h3 className="text-danger fw-bold">Cars</h3>
                            <p> stress that occurs during</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="">
                            <h3 className="text-danger fw-bold">Cars</h3>
                            <p> stress that occurs during</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="">
                            <h3 className="text-danger fw-bold">Cars</h3>
                            <p> stress that occurs during</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="">
                            <h3 className="text-danger fw-bold">Cars</h3>
                            <p> stress that occurs during</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    );
};

export default AllProducts;