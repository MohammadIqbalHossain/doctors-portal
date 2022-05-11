import React from 'react';
import App from '../../App';
import Appointment from './Appointment';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;