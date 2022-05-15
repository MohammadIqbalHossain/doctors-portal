import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner/Spinner';
import { useNavigation } from 'react-day-picker';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        updatingError,
    ] = useUpdateProfile(auth);

    const navigate = useNavigate();

   



    let handleError;
    if (error || googleError || updating) {
        handleError = <p className="text-red-500">
            <small>
                {error?.message || googleError?.message || updatingError?.message}
            </small></p>
    }


    if (loading || googleLoading || updating) {
        return <Spinner />
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log("updated");
        navigate('/main-appointment')
    };

    if (googleUser || user) {
        console.log(user)
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card lg:max-w-lg  shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                            <span className="label-text">Password?</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password has to be 6 charecter or longer"
                                }
                            })}
                        />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>


                        {handleError}
                        <input
                            className="btn bg-gradient-to-r from-primary to-secondary block mx-auto w-full"
                            type="submit"
                            value="Sign Up"
                        />

                    </form>
                    <p>Already have an account?
                        <span className="text-secondary ml-2">
                            <Link to='/login'>Please login</Link>
                        </span>
                    </p>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="w-full border-2 p-2 rounded-lg hover:bg-gray-600 hover:text-white ">
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;