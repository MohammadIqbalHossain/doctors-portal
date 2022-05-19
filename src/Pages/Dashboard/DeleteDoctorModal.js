import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({ doctor, refetch }) => {

  const { name, email } = doctor;

  const deleteDoctor = () => {
    fetch(`https://intense-fortress-15788.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor ${name} is removed`);
          refetch();
        }
      })
  }

  return (
    <div>


      <input type="checkbox" id="delete-doctor-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">Are you sure you wnat to delete ${name}</h3>
          <p class="py-4">If you delete {name} you can't get his informations back.</p>
          <div class="modal-action">
            <label for="delete-doctor-modal" class="btn btn-xs">Cencel</label>
            <button onClick={() => deleteDoctor()} class="btn btn-xs btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;