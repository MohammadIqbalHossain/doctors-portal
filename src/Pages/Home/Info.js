import React from 'react';

const Info = ({ img, title, bgClass }) => {
    return (
        <div className={`card card-side shadow-xl text-white ${bgClass}`}>
            <figure className="pl-10" >
                <img src={img} alt="Movie" />
            </figure >
            <div className="card-body" >
                <h2 className="card-title" > {title}</h2 >
                <p>Click the button to watch on Jetflix app.</p>
            </div >
        </div >
    );
};

export default Info;