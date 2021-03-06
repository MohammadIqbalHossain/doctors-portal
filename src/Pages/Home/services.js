import React from 'react';
import ServicesCard from './ServicesCard';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const Services = () => {
    return (
        <div>
            <h3 className="text-center text-blue-500 font-2xl font-bold my-28">Our services</h3>
            <h1 className="text-center font-bold text-3xl text-gray-500">Services We Provide</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 m-10">
                <ServicesCard title="Fluoride Treatment" img={fluoride}></ServicesCard>
                <ServicesCard title="Cavity Filling" img={cavity}></ServicesCard>
                <ServicesCard title="Teeth Whitening" img={whitening}></ServicesCard>
            </div>


            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="rounded-xl" src={treatment} width="400"/>
                    <div className="md:w-[500px] lg:ml-20">
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <MainButton>Get Started</MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;