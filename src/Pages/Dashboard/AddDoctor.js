import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner/Spinner';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = "a0bb5a19dfe4424e4c9e0b1c70fb6026";

    const { data: services, isLoading } = useQuery("services", () => fetch("https://intense-fortress-15788.herokuapp.com/service").then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    const onSubmit = async data => {
        console.log("Data", data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    //sent data to the server.
                    fetch('https://intense-fortress-15788.herokuapp.com/doctor', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Doctor added succesfully");
                                reset();
                            }
                            else {
                                toast.error("Failed to add");
                            }
                        })
                }
                console.log(result);
            })

    };
    return (
        <div >
            <h2 className="text-2xl">Add new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                <label className="label">
                    <span className="label-text">Your name?</span>
                </label>
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required"
                        },
                    })}
                />

                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">What is your Email?</span>
                </label>
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        pattern: {
                            value: /(.+)@(.+){2,}\.(.+){2,}/,
                            message: 'Provide a valid email'
                        }
                    })}
                />

                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Specialization</span>
                </label>
                <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                    {
                        services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }

                </select>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    name="image"
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: "Name is required"
                        },
                    })}
                />


                <input
                    className="btn bg-gradient-to-r from-primary to-secondary block mx-auto w-full"
                    type="submit"
                    value="Sign Up"
                />

            </form>
        </div>
    );
};

export default AddDoctor;