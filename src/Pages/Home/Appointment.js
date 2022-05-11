import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center my-32" >
            <div className="md:w-[600px] hidden lg:block" >
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div >
            <div className="md:w-[600px] px-5">
                <h3 className="text-primary font-bold text-xl my-5 " > Appointment</h3 >
                <h1 className="text-3xl my-5 text-white" > Make an appointment Today</h1 >
                <p className="text-white my-10" >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page
                </p >
                <div className="py-5">
                    <MainButton>Get Started</MainButton>
                </div>
            </div >
        </section >

    );
};

export default Appointment;