import React, { useEffect, useState } from 'react';

import AllProduct from '../AllProduct/AllProduct';
import ProductBanner from '../ProductBanner/ProductBanner';
import Footer from '../Shared/Footer/Footer';
import NavMenu from '../Shared/NavMenu/NavMenu';


/*

https://i.ibb.co/mJhHYtX/car-1.png
https://i.ibb.co/F5vh1RW/car-2.png
https://i.ibb.co/yWFXtwg/car-3.png
https://i.ibb.co/L5LmD0J/car-4.png
https://i.ibb.co/TBTwtg1/car-5.png
https://i.ibb.co/PmJdTv7/car-6.png
https://i.ibb.co/q0Vz5CW/car-7.png
https://i.ibb.co/fpyWxXf/car-8.png
https://i.ibb.co/SPcKRPz/car-9.png
https://i.ibb.co/KD4B26B/car-10.png
https://i.ibb.co/Lz0cmfG/car-11.png
https://i.ibb.co/WDnn0c5/car-12.png

*/



// const productsData = [

// ]


const AllProducts = () => {
    const [showProducts, setShowProducts] = useState([]);
    // const {isLoading, setIsLoading}=useAuth();


    useEffect(() => {
        // setIsLoading(true);
        fetch('https://secure-stream-98279.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setShowProducts(data);
                // setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    return (
        <>
            <NavMenu></NavMenu>
            <ProductBanner></ProductBanner>
            <div className="pt-5 " style={{ backgroundColor: '#ecf0f1' }}>
                <div className="container">
                    <h1 className="fw-bold text-info my-4">TOTAL AVAILABLE PRODUCTS</h1>

                    <div className="row ">
                        {
                            showProducts?.map(product => <AllProduct
                                key={product?._id}
                                product={product}
                            ></AllProduct>)
                        }
                    </div>
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