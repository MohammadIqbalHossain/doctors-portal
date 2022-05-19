import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
   
    return (
        <div>
            <>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <Link
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                                to="/"
                            >
                                Doctors Portal
                            </Link>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-[#0FCFEC] block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <AiOutlineMenu color="black" />
                            </button>
                        </div >
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center" >
                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/"
                                    >
                                        <span className="ml-2" > Home</span >
                                    </Link >
                                </li >
                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/about"
                                    >
                                        <span className="ml-2" > About</span >
                                    </Link >
                                </li >

                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/main-appointment"
                                    >
                                        <span className="ml-2" > Appointment</span >
                                    </Link >
                                </li >
                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/"
                                    >
                                        <span className="ml-2" > Reviews</span >
                                    </Link >
                                </li >
                                <li className="nav-item" >
                                    {user && <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/dashboard"
                                    >
                                        <span className="ml-2" > Dashboard</span >
                                    </Link >}
                                </li >
                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/"
                                    >
                                        <span className="ml-2" > Contact us</span >
                                    </Link >
                                </li >
                                <li className="nav-item" >
                                    {user ? <button onClick={() => signOut(auth)} className="btn btn-primary">Sign Out</button> : <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/login"
                                    >
                                        <span className="ml-2" > Login</span >
                                    </Link >}
                                </li>


                            </ul >

                        </div >

                    </div >
                    {pathname === '/dashboard' && <button
                        className="text-white cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                        type="button"

                    >

                        <label htmlFor="my-drawer-2" >
                            <AiOutlineMenu color="#0FCFEC" />
                        </label>
                    </button>}
                </nav >
            </>
        </div >
    );
};

export default Header;