import React from 'react'

import logo from '../../public/cardimage/Logo.png'
import Image from 'next/image'
import { FaApple, FaCcApplePay, FaCcPaypal, FaCcVisa, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { MdFacebook, MdOutlineMail } from 'react-icons/md'
import { FaLocationDot, FaSquareTwitter } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";


function Footer() {
    return (
        <div className='max-w-[1440px] mx-auto   '>
            <div className='grid lg:grid-cols-5 bg-[#F4F6F6] px-3 lg:px-28 pt-16'>
                {/* logo seciton */}
                <div className=' col-span-2'>
                    {/* logo section */}
                    <div className=' flex items-center gap-2'>
                        <Image src={logo} className='h-10 w-10  lg:w-[52px] lg:h-[52px]'></Image>
                        <h4 className='text-2xl lg:text-3xl font-bold text-[#212337]'>Fresh Harvest</h4>
                    </div>

                    {/* button section */}
                    <div className=' mt-20 hidden lg:block'>
                        <p className=' text-sm font-[400] text-black'>Download App:</p>
                        <div className=' block lg:flex items-center gap-6'>
                            <div>
                                <button className=' btn text-lg font-[600] h-14 border-none bg-black text-white shadow-none mt-8 flex'>

                                    <div>
                                        <span className='text-5xl'><FaApple /></span>
                                    </div>
                                    <div className=''>
                                        <span className='text-sm font-normal'>
                                            Download on the
                                        </span>
                                        <br />
                                        <span className='text-xl font-bold'>
                                            Apple Store
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button className=' btn text-lg font-[600] h-14 border-none bg-black text-white shadow-none mt-8 flex'>

                                    <div>
                                        <span className=' text-5xl'><IoLogoGooglePlaystore /></span>
                                    </div>
                                    <div className=''>
                                        <span className=' text-sm font-normal'>
                                            Download on the
                                        </span>
                                        <br />
                                        <span className='text-xl font-bold'>
                                            Goolge Play
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-3 grid grid-cols-3 pt-5 lg:p-0'>
                    {/* quick links 1 */}
                    <div className=' col-span-1'>
                        <div>
                            <h4 className='text-sm lg:text-lg font-medium text-[#212337] pb-3'>Quick links 1</h4>
                        </div>
                        <div>
                            <ul className=' space-y-1.5'>
                                <li className=' text-sm text-[#4A4A52]'>Home</li>
                                <li className=' text-sm text-[#4A4A52]'>Shop</li>
                                <li className=' text-sm text-[#4A4A52]'>About us</li>
                                <li className=' text-sm text-[#4A4A52]'>Blog</li>
                                <li className=' text-sm text-[#4A4A52]'>Detail Blog</li>
                            </ul>
                        </div>
                    </div>
                    {/* quick links 2 */}
                    <div className=' col-span-1'>
                        <div>
                            <h4 className='text-sm lg:text-lg font-medium text-[#212337] pb-3'>Quick links 2</h4>
                        </div>
                        <div>
                            <ul className=' space-y-1.5'>
                                <li className=' text-sm text-[#4A4A52]'>Favorites</li>
                                <li className=' text-sm text-[#4A4A52]'>Cart</li>
                                <li className=' text-sm text-[#4A4A52]'>Sign in</li>
                                <li className=' text-sm text-[#4A4A52]'>Register</li>

                            </ul>
                        </div>
                    </div>
                    {/* contact us*/}
                    <div className=' col-span-1'>
                        <div>
                            <h4 className='text-sm lg:text-lg font-medium text-[#212337] pb-3'>Contact us</h4>
                        </div>
                        <div>
                            <ul className=' space-y-1.5 pb-8'>
                                <li className=' text-sm text-[#4A4A52] flex items-center gap-2'> <span className='text-[#749B3F]'><FaPhoneAlt /></span> 1234 5678 90</li>
                                <li className='text-[8px] lg:text-sm text-[#4A4A52] flex items-center gap-2'> <span className='text-[#749B3F]'><MdOutlineMail /></span> Freshharvests@gmail.com</li>
                                <li className='text-[8px] lg:text-sm text-[#4A4A52] flex items-center gap-2'> <span className='text-[#749B3F]'><FaLocationDot /></span> Tanjung Sari Street, Pontianak, Indonesia</li>


                            </ul>
                        </div>
                        <div className='hidden lg:block'>
                            <div>
                                <h4 className='text-[12px] font-medium text-[#212337]'>Accepted Payment Methods:</h4>
                            </div>
                            <div className='flex items-center gap-2.5 pt-3'>
                                <div className=' btn bg-white shadow-none border-none'>
                                    <RiVisaLine className=' text-5xl text-black' />
                                </div>
                                <div className=' btn bg-white shadow-none border-none'>
                                    <GrPaypal className=' text-3xl text-black' />
                                </div>
                                <div className=' btn bg-white shadow-none border-none'>
                                    <FaCcApplePay className=' text-5xl text-black' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-[#F4F6F6] px-3 lg:px-28 pt-5 pb-5'>
                <p className=' border-t-2 border-[#D9D9D9]'></p>
                <div className='block lg:flex lg:justify-between lg:items-center pt-6'>
                    <div>
                        <p className=' text-[#212337] text-[10px] lg:text-[12px] font-bold '>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                    </div>
                    <div className=' flex items-center gap-5 pt-3 lg:pt-0'>
                        <div>
                            <span className='text-3xl text-[#212337]'><MdFacebook /></span>
                        </div>
                        <div>
                            <span className='text-3xl text-[#212337]'><FaSquareTwitter /></span>
                        </div>
                        <div>
                            <span className='text-3xl text-[#212337]'><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer