import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import ReviewList from '../ReviewList/ReviewList';


const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    const { setLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            })
            .finally(() => setLoading(false))

    }, []);

    return (
        <div id="review" className="py-5 bg-light" style={{ height: '' }}>
            <div className="container">
                <h2 className="py-3 fw-bold">CLIENT REVIEWS</h2>
                <div className="row">
                    {allReviews?.map(review => <ReviewList
                        key={review._id}
                        review={review}
                    ></ReviewList>)}
                </div>
            </div>

        </div>
    );
};

export default Reviews;