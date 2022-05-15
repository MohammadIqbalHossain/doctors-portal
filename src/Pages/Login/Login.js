import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner/Spinner';
import { useNavigation } from 'react-day-picker';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [email, setEmail] = useState();

    const emailRef = useRef("");
    console.log(emailRef)

    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending,
        passResetError
    ] = useSendPasswordResetEmail(auth);


    const getEmail = (e) => {
        const email = e.target.value;
        console.log(email)
    }


    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (googleUser || user) {
            navigate(from, { replace: true });
        }
    }, [googleUser, user])

    let handleError;
    if (error || googleError) {
        handleError = <p className="text-red-500"><small>{error.message}</small></p>
    }

    if (loading || googleLoading) {
        return <Spinner />
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
      };

    const handleSendPassReset = async () => {
        const email = emailRef.current;
        console.log(email);
        
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card lg:max-w-lg  shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">What is your Email?</span>
                        </label>
                        <input
                            onBlur={getEmail}
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
                            value="login"
                        />

                    </form>
                    <p>New to doctors portal
                        <span className="text-secondary ml-2">
                            <Link to='/signup'>Create new Account</Link>
                        </span>
                    </p>

                    <p>Forget Password
                        <span className="text-secondary ml-2">
                            <span>Reset password</span>
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

export default Login;