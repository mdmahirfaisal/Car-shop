import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Swal from 'sweetalert2'
import Fade from 'react-reveal/Fade';

import useAuth from '../../../hooks/useAuth';
import ReviewList from '../ReviewList/ReviewList';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Autoplay,
    Navigation,
    EffectCoverflow,
    Pagination,
} from "swiper/core";

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    const { setLoading } = useAuth();
    SwiperCore.use([EffectCoverflow, Autoplay, Navigation, Pagination]);

    useEffect(() => {
        fetch('https://lit-citadel-97865.herokuapp.com/review')
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
    }, [setLoading]);

    return (
        <div id="review" className="py-5 bg-light reviews-section" style={{ minHeight: '500px' }}>
            <div style={{ width: '98%', margin: '0 auto' }}>
                <Fade bottom duration={3000} distance="50px">
                    <h2 className="pb-5 fw-bold">CLIENT REVIEWS</h2>
                </Fade>
                <Fade bottom duration={3000} distance="50px">
                    <Swiper
                        loop={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 60,
                            stretch: 5,
                            depth: 100,
                            modifier: 2,
                            // slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                    >
                        {allReviews.map((review) => {
                            return (
                                <SwiperSlide className="swiper-slide"
                                    key={review._id}>
                                    <ReviewList review={review}></ReviewList>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Fade>

            </div>

        </div>
    );
};

export default Reviews;