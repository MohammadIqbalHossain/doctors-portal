import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Info from './Info';


const InfoCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 m-10">
            <Info
                img={clock}
                title="Openning Hours"
                bgClass="bg-gradient-to-r from-primary to-secondary"
            ></Info>
            <Info
                img={marker}
                title="Visit Hours"
                bgClass="bg-accent"
            ></Info>
            <Info
                img={phone}
                title="Contact Us Now"
                bgClass="bg-gradient-to-r from-primary to-secondary"
            ></Info>
        </div>
    );
};

export default InfoCard;