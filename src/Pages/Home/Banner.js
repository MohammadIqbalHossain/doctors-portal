import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white" >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div className="md:w-[600px]">
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum voluptatem in sit est, ut quaerat eligendi odit quis odio iste iure magni quod perspiciatis saepe, eaque labore adipisci iusto aliquid vero inventore, possimus incidunt doloribus! Atque nemo tempore cum.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;