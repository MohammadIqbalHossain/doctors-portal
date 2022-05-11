import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer'
import AppointmentHome from './AppointmentHome';
import AvilableAppoinment from './AvilableAppoinment';
const MainAppointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentHome selected={selected} setSelected={setSelected}/>
            <AvilableAppoinment selected={selected} setSelected={setSelected}/>
            <Footer />
        </div>
    );
};

export default MainAppointment;