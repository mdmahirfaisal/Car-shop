import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'

import HomeProduct from '../HomeProduct/HomeProduct';


const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const { loading, setLoading } = useAuth();



    useEffect(() => {
        setLoading(true)
        fetch('https://lit-citadel-97865.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,

                })
            })
            .finally(() => setLoading(false))

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