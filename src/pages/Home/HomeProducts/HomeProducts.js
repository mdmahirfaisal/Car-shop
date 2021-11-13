import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import HomeProduct from '../HomeProduct/HomeProduct';


const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const { loading, setLoading } = useAuth();



    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    const limitedProducts = products.slice(0, 6);


    return (
        <div id="products">
            <h1 className="fw-bold text-secondary py-5 bg-light">OUR PRODUCTS</h1>
            <div className="container">
                {loading ? <Spinner style={{ height: "100px", width: "100px" }} className="text-center" animation="border " variant="primary fs-1" /> :
                    <div className="row">
                        {
                            limitedProducts?.map(product => <HomeProduct
                                key={product._id}
                                product={product}
                            ></HomeProduct>)
                        }
                    </div>}
            </div>
        </div>
    );
};

export default HomeProducts;