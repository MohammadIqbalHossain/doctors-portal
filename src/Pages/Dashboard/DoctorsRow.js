import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctors}) => {
    const { name, img, specialty,  } = doctor;

    return (
        <tr>
            <th>{index}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>

                <label onClick={() => setDeletingDoctors(doctor)} for="delete-doctor-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorsRow;