import React, { useEffect, useState } from 'react';

import AllProduct from '../AllProduct/AllProduct';
import NavMenu from '../Shared/NavMenu/NavMenu';

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
            <div className="pt-5 bg-light">
                <div className="container">
                    <h1 className="fw-bold text-info my-4">TOTAL AVAILABLE PRODUCTS</h1>

                    <div className="row ">
                        {
                            showProducts?.map(product => <AllProduct
                                key={product._id}
                                product={product}
                            ></AllProduct>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllProducts;