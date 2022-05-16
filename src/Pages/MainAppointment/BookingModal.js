import { format } from 'date-fns';
import { da } from 'date-fns/locale';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ selected, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formatedDate = format(selected, 'PP')

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        }

        fetch(`https://intense-fortress-15788.herokuapp.com/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Your appointment is set on ${formatedDate}, at ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on ${data?.booking?.date} ${data.booking?.slot}`);
                }
                refetch()
                setTreatment(null);
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center gap-5 mt-5">
                        <input type="text" disabled value={format(selected, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}
                                </option>)
                            }
                        </select>

                        <input
                            name="name"
                            type="text"
                            disabled
                            value={user?.displayName}
                            className="input input-bordered w-full max-w-xs"
                        />

                        <input
                            name="email"
                            type="email"
                            disabled
                            value={user?.email}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            name="phone"
                            type="number"
                            placeholder="Phone number"
                            className="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;