import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://doctors-portal-server-site.up.railway.app/users/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                console.log("res", res);
                if (res.status === 403) {
                    toast.error("You can't make an admin");
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made an admin");
                }
            })
    }


    return (
        <tr>
            <td>1</td>
            <td>{email}</td>
            <td>{role !== "admin" ? <button onClick={makeAdmin} className="btn btn-xs">Make admin</button> : "Already Admin"}</td>
            <td><button className="btn btn-xs">Remove admin</button></td>
        </tr>
    );
};

export default UserRow;