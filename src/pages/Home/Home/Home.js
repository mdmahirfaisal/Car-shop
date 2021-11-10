import React from 'react';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Banner></Banner>
            <About></About>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;