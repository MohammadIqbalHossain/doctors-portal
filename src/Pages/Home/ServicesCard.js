import React from 'react';

const ServicesCard = ({img, title}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officiis.</p>
                </div>
            </div>
    );
};

export default ServicesCard;