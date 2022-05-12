import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ selected, treatment, setTreatment}) => {
    const { _id, name, slots } = treatment;
    
    const handleBooking = (e) => {
          e.preventDefault();
          const slot = e.target.slot.value;
          console.log(slot, _id , name)
          setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center gap-5 mt-5">
                        <input type="text" disabled value={format(selected, 'PP')} class="input input-bordered w-full max-w-xs" />

                        <select name="slot" class="select select-bordered w-full max-w-xs">
                           {
                               slots.map(slot => <option value={slot}>{slot}</option>)
                           }
                        </select>

                        <input name="name" type="text" placeholder="Your name" class="input input-bordered w-full max-w-xs" />

                        <input name="email" type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;