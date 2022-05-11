import React from 'react';
import App from '../../App';
import Footer from '../Shared/Footer/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import HomeContact from './HomeContact';
import InfoCard from './InfoCard';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Appointment />
            <Testimonial />
            <HomeContact />
            <Footer />
        </div>
    );
};

export default Home;