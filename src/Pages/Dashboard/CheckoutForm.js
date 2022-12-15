import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessig] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSercret] = useState("")

    const { _id, price, patient, patientName } = appointment



    useEffect(() => {
        fetch(`https://doctors-portal-server-site.up.railway.app/create-payment-intent`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSercret(data.clientSecret)
                }
            })
    }, [])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || success) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");

        setProcessig(true);
        //Intent payment confimation.
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        const payment = {
            appointment: _id,
            transactionId: paymentIntent.id
        }

        if (intentError) {
            setCardError(intentError?.message)
            setProcessig(false)

        }
        else {
            setCardError("");
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess("Congrats, Your payment is successfull");

            fetch(`https://doctors-portal-server-site.up.railway.app/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProcessig(false)
                })


        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                success && <div className="text-green-500">
                    <p>{success}</p>
                    <p>Your transection id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;