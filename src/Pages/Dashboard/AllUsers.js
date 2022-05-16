import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner/Spinner';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://intense-fortress-15788.herokuapp.com/users', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <h1>All users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>


                    </thead>
                    <tbody>
                        <tr>
                            {
                                users.map((user, index) => <UserRow
                                    key={index}
                                    user={user}
                                    refetch={refetch}
                                >
                                </UserRow>)
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;