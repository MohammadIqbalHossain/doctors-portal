import React from 'react';
import chair from '../../assets/images/chair.png';
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white" >
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="md:w-[600px]">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ipsum voluptatem in sit est, ut quaerat eligendi odit quis odio iste iure magni quod perspiciatis saepe, eaque labore adipisci iusto aliquid vero inventore, possimus incidunt doloribus! Atque nemo tempore cum.</p >
                    <MainButton>Get started</MainButton>
                </div >
            </div >
        </div >
    );
};

export default Banner;