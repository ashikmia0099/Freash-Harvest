"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useAuth } from '../../../../../../Context/AuthContext';
import Swal from 'sweetalert2';

function Login() {


    const { handleSignInWithEmail, user, setUser, handleSignOut } = useAuth()


    const handleSignIn = (e) => {
        e.preventDefault();


        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');


        console.log(email, password);



        handleSignInWithEmail(email, password)
            .then((userCredential) => {

                const signInuser = userCredential.user

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${email} You are successfully signin`,
                    showConfirmButton: false,
                    timer: 1500
                });



            })
            .catch((error) => {
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Invalid email or password.`,
                    showConfirmButton: false,
                    timer: 1500
                });

                console.error("Sign-in error:", error.message);
            })




    }

    return (
        <div>
            <h1 className=' text-4xl font-semibold text-[#212337] text-center'>Login</h1>

            <div className=''>
                <div className=' '>
                    <form action="" onSubmit={handleSignIn}>
                        <div>
                            <legend className="fieldset-legend text-[#212337]  ">Email</legend>
                            <input type="text" name='email' className="input bg-white border-2 border-gray-400 text-[#212337] w-full" placeholder="Email" />
                        </div>
                        <div>
                            <legend className="fieldset-legend text-[#212337]">Password</legend>
                            <input type="password" name='password' className="input bg-white border-2 border-gray-400 text-[#212337] w-full" placeholder="Password" />
                        </div>
                        <div className=' py-1.5 flex items-center justify-between'>
                        <div className=' flex items-center  gap-2.5'>
                            <span><input type="checkbox" defaultChecked className="checkbox checkbox-md border-[#FF6A19] text-[#FF6A19]" /></span>
                            <span className=' text-[12px] text-[#4A4A52]'>Remember me</span>
                        </div>
                        <div>
                            <p className=' text-sm font-semibold text-black border-b border-black'>Forgot Password</p>
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <button className=' btn bg-[#FF6A1A] hover:bg-[#FF6A1A] h-14 text-lg rounded-xl border-none hover:border-none shadow-none lg:shadow-none w-full'>Sign In</button>
                    </div>
                    </form>
                   
                    <div>
                        <div className="divider text-black before:bg-[#D9D9D9] after:bg-[#D9D9D9]">Or Sign in with</div>
                    </div>

                    <div className=' flex gap-2.5'>
                        <div className=' w-full'>
                            <button className=' btn bg-white hover:bg-white h-12 text-lg rounded-xl border-2 border-[#D9D9D9] hover:border-[#D9D9D9] shadow-none lg:shadow-none w-full'>  <span className=' text-2xl'><FcGoogle />
                            </span> <span className=' text-[#212337] text-lg font-semibold'>Google</span></button>
                        </div>
                        <div className=' w-full'>
                            <button className=' btn bg-white hover:bg-white h-12 text-lg rounded-xl border-2 border-[#D9D9D9] hover:border-[#D9D9D9] shadow-none lg:shadow-none w-full'>  <span className='text-[#3C5A9A] text-2xl'><RiFacebookBoxFill />
                            </span> <span className=' text-[#212337] text-lg font-semibold '>Google</span></button>
                        </div>

                    </div>
                    <div className=' pt-4'>
                        <p className=' text-sm font-semibold text-black text-center'><span>Don’t have an account? </span> <span className='text-[#FF6A19]'>Sign up</span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login