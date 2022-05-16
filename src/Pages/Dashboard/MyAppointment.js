import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom'

const MyAppointment = () => {

    const [appointments, setAppointmets] = useState([]);
    const [user] = useAuthState(auth);
    console.log(appointments);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://intense-fortress-15788.herokuapp.com/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(response => {
                    console.log("res", response);
                    if (response.status === 401 || response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate("/login");
                    }
                    return response.json()

                })
                .then(data => setAppointmets(data))
        }
    }, [])

    return (
        <div>
            <h1>My Appointment {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Patinet</th>
                            <th>Date</th>
                            <th>Treatment</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map(a => <tr>
                                <th>1</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.treatment}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;