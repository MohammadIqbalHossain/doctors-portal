import React from 'react';
import App from '../../App';
import Appointment from './Appointment';
import Banner from './Banner';
import InfoCard from './InfoCard';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Appointment />
        </div>
    );
};

export default Home;