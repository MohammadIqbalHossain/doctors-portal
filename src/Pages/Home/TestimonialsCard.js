import React from 'react';

const TestimonialsCard = ({ testimonial }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl mx-10 my-10" >
            <div className="card-body" >
                <p>{testimonial.description}</p>
                <div className="flex justify-center items-center mt-3" >
                    <div className="avatar" >
                        <div className="w-[64px] h-[64px] rounded-full ring ring-offset-2" >
                            <img src={testimonial.img} />
                        </div >
                    </div >
                    <div className="ml-5">
                        <h1>{testimonial.name}</h1>
                        <h3>{testimonial.location}</h3>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default TestimonialsCard;