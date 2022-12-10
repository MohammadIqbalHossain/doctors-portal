import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L14yAFnm89k40kTV81n5y1mxhYzTDPoLJFDlT6lCT8p7q7nPpjVX03MKdq1YfK5us5BzYrVUL2cil7uJu0z2Vp500ZCg165BM');

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-server-iota-gray.vercel.app/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(["bookings", id], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col ">
            <h1>This is payment: Payment ID: {id}</h1>
            <div class="card w-96 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <p className="text-2xl text-bold text-primary">
                        Hello, {appointment.patientName}
                    </p>
                    <h2 class="card-title">Please pay for {appointment.treatment}</h2>
                    <p>Your appointment {appointment.date} at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;