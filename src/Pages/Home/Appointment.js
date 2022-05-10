import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center my-32">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-primary font-bold text-xl my-5 ">Appointment</h3>
                <h1 className="text-3xl my-5 text-white">Make an appointment Today</h1>
                <p className="text-white">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
            </div>
        </section>

    );
};

export default Appointment;