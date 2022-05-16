import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin.js';
import Spinner from '../Shared/Spinner/Spinner';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-purple-400'>Dashboard</h2>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to='/dashboard'>Your appointments</Link>
                    </li>
                    <li>
                    <Link to='/dashboard/review'>Your Review</Link>
                    </li>
                    <li>
                    <Link to='/dashboard/history'>History</Link>
                    </li>
                    <li>
                    {admin && <Link to='/dashboard/users'>All users</Link>}
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;