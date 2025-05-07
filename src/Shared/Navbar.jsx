'use client'
import Image from 'next/image'
import React from 'react'

import logo from '../../public/cardimage/Logo.png'
import Link from 'next/link'
import { MdFavorite, MdMenu } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa"
import Login from '@/app/ComponentData/Auth/Login/LoginJsx/Login'
import Register from '@/app/ComponentData/Auth/Register/RegisterJsx/Register'

function Navbar() {
    const links = (
        <>
            <li className='text-white lg:text-black text-sm'><Link href={"/"}>Home</Link></li>
            <li className='text-white lg:text-black text-sm'><Link href={"/"}>Shop</Link></li>
            <li className='text-white lg:text-black text-sm'><Link href={"/"}>About Us</Link></li>
            <li className='text-white lg:text-black text-sm block lg:hidden'><Link href={"/"}>Fevorite</Link></li>
            <li className='text-white lg:text-black text-sm block lg:hidden'><Link href={"/"}>Cart</Link></li>
            {/* <li className='text-white lg:text-black text-sm block lg:hidden'><Link href={"/"}>SignIn</Link></li> */}
            <li className='text-white lg:text-black text-sm block lg:hidden pl-2' onClick={() => document.getElementById('my_modal_1').showModal()}>
            SignIn
                
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-white max-w-[480px] relative">
                        <div
                            onClick={() => document.getElementById('my_modal_1').close()}
                            className="absolute top-0 right-0 cursor-pointer p-4"
                        >
                            <h1 className='text-6xl font-semibold text-[#212337] text-center'>X</h1>
                        </div>
                        <Login />
                    </div>
                </dialog>
            </li>
            <li className='text-white lg:text-black text-sm block lg:hidden pl-2 pt-2' onClick={() => document.getElementById('my_modal_2').showModal()}>
            Sign Up
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-white max-w-[480px] relative">
                        <div
                            onClick={() => document.getElementById('my_modal_2').close()}
                            className="absolute top-0 right-0 cursor-pointer p-4"
                        >
                            <h1 className='text-6xl font-semibold text-[#212337] text-center'>X</h1>
                        </div>
                        <Register />
                    </div>
                </dialog>
            </li>
        </>
    )

    const endlinks = (
        <>
            <li className='flex items-center justify-center gap-2'>
                <MdFavorite className='text-xl hidden lg:block' />
                <p className='text-sm hidden lg:block'>Favorite</p>
            </li>
            <li className='flex items-center justify-center gap-2'>
                <div className="indicator hidden lg:block">
                    <FaShoppingCart />
                    <span className="badge text-[10px] p-1.5 -mt-2 px-2 indicator-item bg-[#EE4536] border-none">8</span>
                </div>
                <p className='text-sm hidden lg:block'>Cart</p>
            </li>
            <li className='flex items-center justify-center'>
                <button
                    className="btn btn-outline btn-white text-white border-2 border-white hover:shadow-none hover:bg-[#749B3F] bg-none hidden lg:block"
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                >
                    SignIn
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-white max-w-[480px] relative">
                        <div
                            onClick={() => document.getElementById('my_modal_1').close()}
                            className="absolute top-0 right-0 cursor-pointer p-4"
                        >
                            <h1 className='text-6xl font-semibold text-[#212337] text-center'>X</h1>
                        </div>
                        <Login />
                    </div>
                </dialog>
            </li>
            <li className='flex items-center justify-center'>
                <button
                    className="btn btn-outline btn-white text-white border-2 border-white hover:shadow-none hover:bg-[#749B3F] bg-none hidden lg:block"
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                >
                    Sign Up
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-white max-w-[480px] relative">
                        <div
                            onClick={() => document.getElementById('my_modal_2').close()}
                            className="absolute top-0 right-0 cursor-pointer p-4"
                        >
                            <h1 className='text-6xl font-semibold text-[#212337] text-center'>X</h1>
                        </div>
                        <Register />
                    </div>
                </dialog>
            </li>
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1440px] mx-auto mt-5 px-2 lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdMenu className='text-black text-4xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                <div className='flex items-center gap-2'>
                    <Image src={logo} className='h-7 w-7 lg:h-10 lg:w-10' alt="Logo" />
                    <h4 className='text-[#212337] text-sm font-bold lg:text-2xl'>Fresh Harvest</h4>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-5">
                {endlinks}
            </div>
        </div>
    )
}

export default Navbar
