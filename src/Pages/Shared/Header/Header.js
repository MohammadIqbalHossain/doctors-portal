import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

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
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto" >
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
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/"
                                    >
                                        <span className="ml-2" > Contact us</span >
                                    </Link >
                                </li >
                                <li className="nav-item" >
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/"
                                    >
                                        <span className="ml-2" > Login</span >
                                    </Link >
                                </li >
                            </ul >
                        </div >
                    </div >
                </nav >
            </>
        </div >
    );
};

export default Header;