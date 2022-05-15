import React from 'react';

const AppointmnetCart = ({ bookings, setTreatment }) => {
    const { name, slots } = bookings;

    return (
        <div className="card lg;max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-secondary text-center text-xl font-bold">{name}</h2>
                <p className="text-center">
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className="text-red-400">Try another day.</span>
                    }
                </p>
                <p className="text-center">{slots.length} {slots.length > 1 ? "spaces" : "space"} avilable</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(bookings)}
                        disabled={slots.length === 0}
                        className="btn modal-button btn-sm bg-gradient-to-r from-primary to-secondary ">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmnetCart;