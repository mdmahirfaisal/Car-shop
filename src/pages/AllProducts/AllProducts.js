
import React, { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';

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
const allProducts = [
    {
        name: "Lamborghini Diablo",
        price: "3200",
        img: "https://i.ibb.co/mJhHYtX/car-1.png",
        description: "I don't really know the process manufacturers follow to name a car, but I'm sure the approval protocol involves a long list of people."
    },
    {
        name: "Ford F-150 Raptor",
        price: "6500",
        img: "https://i.ibb.co/F5vh1RW/car-2.png",
        description: "Built between 1990 and 2001, the Lamborghini Diablo tops this list. Its brilliant name means  in Spanish, and with such an .",
    },
    {
        name: "Ferrari Testarossa",
        price: "5500",
        img: "https://i.ibb.co/yWFXtwg/car-3.png",
        description: "The meanest, most menacing off-road truck Ford builds has the right name. The Ford Raptor gets its name from birds of prey and (of course)."
    },
    {
        name: "Porsche 911 Carrera",
        price: "4800",
        img: "https://i.ibb.co/L5LmD0J/car-4.png",
        description: "Italian and Spanish names sound better in English-speaking countries, and the Testarossa is no exception. It literally means in ."
    },
    {
        name: "Jensen Interceptor",
        price: "9000",
        img: "https://i.ibb.co/TBTwtg1/car-5.png",
        description: "Carrera means in Spanish, and this Porsche delivers. The name came from the Carrera Panamericana race in Mexico, where Porsche ."
    },
    {
        name: "Lamborghini Huracán",
        price: "7500",
        img: "https://i.ibb.co/PmJdTv7/car-6.png",
        description: "The name Interceptor was originally used in 1950 when British car manufacturer Jensen Motors revealed its second car after World War II."
    },
    {
        name: "Ferrari 812 Superfast",
        price: "5800",
        img: "https://i.ibb.co/q0Vz5CW/car-7.png",
        description: "As you probably already know, huracán means  in Spanish, and a name like that would only suit a handful of brands. Thankfully, Lamborghini"
    },
    {
        name: "Jeep Gladiator",
        price: "9000",
        img: "https://i.ibb.co/fpyWxXf/car-8.png",
        description: "The word  makes any name attractive. Especially on a Ferrari. And especially when you attach the word  at the end. The Ferrari 812 Superfast,"
    },
    {
        name: "Land Rover Defender",
        price: "6000",
        img: "https://i.ibb.co/SPcKRPz/car-9.png",
        description: " Although it's not fast like the Raptor, it tackles off-road trails like few can, and it has one of the best car names in the industry"
    },
    {
        name: " Rolls-Royce Wraith",
        price: "7800",
        img: "https://i.ibb.co/KD4B26B/car-10.png",
        description: "The Land Rover Defender joins the Jeep Wrangler and the Mercedes-Benz G-Class as the world's iconic off-roaders, but the Defender."
    },
    {
        name: "Suzuki Samurai",
        price: "4700",
        img: "https://i.ibb.co/Lz0cmfG/car-11.png",
        description: "Even if you don't know its meaning, the word  sounds scary. And it is. Although the Rolls-Royce isn't asexpensive luxury car since 2013"
    },
    {
        name: "Volkswagen Beetle",
        price: "6900",
        img: "https://i.ibb.co/WDnn0c5/car-12.png",
        description: "The cute, cheap, and capable off-roade few years later. The Suzuki Samurai didn't win many battles, but it carried a cool car name that stood out in the industry."
    },
];



const AllProducts = () => {
    // const [showProducts, setShowProducts] = useState([]);
    // const { Loading, setLoading } = useAuth();


    // useEffect(() => {
    //     setLoading(true);
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => {
    //             setShowProducts(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //         .finally(() => setLoading(false));

    // }, []);

    return (
        <>
            <NavMenu></NavMenu>
            <ProductBanner></ProductBanner>
            <div className="pt-5 " style={{ backgroundColor: '#ecf0f1' }}>
                <div className="container">
                    <h1 className="fw-bold text-info my-4">TOTAL AVAILABLE PRODUCTS</h1>

                    <div className="row ">
                        {
                            allProducts?.map(product => <AllProduct
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