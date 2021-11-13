import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Banner></Banner>
            <About></About>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;