import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmnetCart from './AppointmnetCart';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'
import Spinner from '../Shared/Spinner/Spinner'

const AvilableAppoinment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null)


    const formatedDate = format(selected, "PP");


    const { isLoading, error, data: bookings, refetch } = useQuery(["available", formatedDate], () =>
        fetch(`https://intense-fortress-15788.herokuapp.com/available?date=${formatedDate}`)
            .then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <p className="text-center text-secondary font-bold">Avilable appointment {format(selected, 'PP')}.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-12">
                {
                    bookings?.map(booking => <AppointmnetCart
                        key={booking._id}
                        bookings={booking}

                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} selected={selected} treatment={treatment} refetch={refetch} />}
        </div>
    );
};

export default AvilableAppoinment;