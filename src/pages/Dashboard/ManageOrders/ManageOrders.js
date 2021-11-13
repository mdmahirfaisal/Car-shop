import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
            .catch(error => {

            })
    }, []);
    console.log(allOrders);



    return (
        <div>
            <div className="container">
                <h1 className="fw-bold text-secondary">MANAGE ORDERS</h1>
                <div className="row">
                    {/* {allOrders.map(order=>)} */}
                </div>
            </div>

        </div>
    );
};

export default ManageOrders;