import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
  const [deletingDoctors, setDeletingDoctors] = useState(null)


  const { data: doctors, isLoading, refetch } =
    useQuery("doctor", () => fetch('https://doctors-portal-server-site.up.railway.app/doctor')
      .then(res => res.json()))

  if (isLoading) {
    return <Spinner />
  }



  return (
    <div>
      <h1 className="text-2xl">Manage Doctors: {doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              doctors.map((doctor, index) => <DoctorsRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctors={setDeletingDoctors}
              ></DoctorsRow>)
            }


          </tbody>
        </table>
      </div>
      {
        deletingDoctors && <DeleteDoctorModal
          doctor={deletingDoctors}
          refetch={refetch}
        ></DeleteDoctorModal>
      }
    </div>
  );
};

export default ManageDoctor;