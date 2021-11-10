import React, { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';


const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    // const {isLoading, setIsLoading}=useAuth();



    useEffect(() => {
        // setIsLoading(true);
        fetch('https://secure-stream-98279.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    const limitedProducts = products.slice(0, 6);

    //  <Spinner style={{ height: "100px", width: "100px" }} animation="border " variant="primary fs-1" />
    return (
        <div id="products">
            <h1 className="fw-bold text-secondary py-5 bg-light">OUR PRODUCTS</h1>
            <div className="container">

                <div className="row">
                    {
                        limitedProducts?.map(product => <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;