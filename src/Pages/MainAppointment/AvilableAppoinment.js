import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmnetCart from './AppointmnetCart';
import BookingModal from './BookingModal';

const AvilableAppoinment = ({ selected }) => {
    const [bookings, setBookings] = useState([]);
    const [treatment, setTreatment] = useState(null)

 
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <p className="text-center text-secondary font-bold">Avilable appointment {format(selected, 'PP')}.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-12">
                {
                    bookings.map(booking => <AppointmnetCart
                    key={booking._id}
                    bookings={booking}
                    setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} selected={selected} treatment={treatment} />}
        </div>
    );
};

export default AvilableAppoinment;