import React from 'react';

const AppointmnetCart = ({ bookings, setTreatment }) => {
    const { name, slots } = bookings;

    return (
        <div class="card lg;max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className="text-red-400">Try another day.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} avilable</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(bookings)}
                        disabled={slots.length === 0}
                        class="btn modal-button btn-primary">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmnetCart;