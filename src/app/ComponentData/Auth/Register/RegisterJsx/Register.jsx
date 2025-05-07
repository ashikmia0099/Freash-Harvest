"use client"

import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useAuth } from '../../../../../../Context/AuthContext';
import Swal from 'sweetalert2';

function Register() {

    const {  user, setUsers, loading, setLoading, handleSignUpWithEamil, handleSignInWithEmail, handleSignOut,UserProfileUpdate} = useAuth()

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('firstname');
        const email = form.get('email');
        const password = form.get('password');
       

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

       

        handleSignUpWithEamil(email, password)
            .then((userCredential) => {
                const signupuser = userCredential.user;
                // console.log(signupuser);  
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} You are successfully signUp`,
                    showConfirmButton: false,
                    timer: 1500
                  }); 
                  setUsers(null); // Clear user from context
                        handleSignOut(); // Now sign out                 
            })
            .catch((error) => {
                console.log("Error", error);
                toast.error(error.message);
            });

    }




    // phone number and country set







    return (

        <div>
            <h1 className=' text-4xl font-semibold text-[#212337] text-center'>Register</h1>
            <div className=''>
                <div className=' '>
                    <form action="" onSubmit={handleSignUp}>
                        <div>
                            <legend className="fieldset-legend text-[#212337]  ">First Name</legend>
                            <input type="text" name='firstname' className="input bg-white border-2 border-gray-400 text-[#212337] w-full" placeholder="First Name" />
                        </div>
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
                        <p className=' text-sm font-semibold text-black text-center'><span>Already have an account? </span> <span className='text-[#FF6A19]'>Sign In</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register