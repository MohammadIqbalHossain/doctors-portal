import React from 'react';
import appointment from '../../assets/images/appointment.png'
const HomeContact = () => {
    return (
        <div className="my-28" style={{ background: `url(${appointment})` }
        }>
            <div>
                <h3 className="text-center font-bold text-xl text-primary my-2 pt-10">Contact Us</h3>
                <h1 className="text-3xl text-center font-bold text-white" > Stay connected with us</h1 >
            </div >
            <form className="flex flex-col justify-center items-center" >
                <input
                    className="my-3 w-80 p-2 rounded-lg"
                    placeholder="Your Email Address"
                    type="email"
                    name=""
                    id=""
                />
                <input
                    className="my-3 w-80 p-2 rounded-lg"
                    placeholder="Your subject"
                    type="Your subject"
                    name=""
                    id=""
                />
                <textarea
                    className="my-3 w-80 p-2 rounded-lg"
                    placeholder="Your message"
                    type="text"
                />
                <input
                    className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold my-5"
                    type="submit"
                    value="submit"
                />
            </form >
        </div >
    );
};

export default HomeContact;