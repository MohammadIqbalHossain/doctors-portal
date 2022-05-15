import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentHome = ({ selected, setSelected }) => {

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className="md:w-[600px]">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />

                </div>

            </div>
        </div>
    );
};

export default AppointmentHome;