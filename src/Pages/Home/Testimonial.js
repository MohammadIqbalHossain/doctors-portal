import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialsCard from './TestimonialsCard';


const Testimonial = () => {
   const testimonial = [
       {
           _id: 1,
           name: "Winson Herry",
           location: "California",
           description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img: people1
       },
       {
           _id: 1,
           name: "Winson Herry",
           location: "California",
           description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img: people1
       },
       {
           _id: 1,
           name: "Winson Herry",
           location: "California",
           description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img: people1
       },
   ]

    return (
        <section>
            <div className="flex justify-between mx-10">
                <div>
                    <h3 className="font-bold text-xl text-primary">Testimonial</h3>
                    <h1 className="text-4xl">What our patients says.</h1>
                </div>
                <div>
                    <img className="md:w-[192px] md:h-[156px] w-[98px] h-[84px]" src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-10">
                {
                    testimonial.map(cart => <TestimonialsCard
                    key={cart._id}
                    testimonial={cart}
                    >
                    </TestimonialsCard>)
                }

            </div>
        </section>
    );
};

export default Testimonial;