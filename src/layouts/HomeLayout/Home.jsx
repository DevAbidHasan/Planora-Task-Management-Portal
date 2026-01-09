import React from 'react';
import Navbar from '../../Pages/Navbar';
import Footer from '../../Pages/Footer';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;