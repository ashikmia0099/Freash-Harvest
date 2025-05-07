import React from 'react'

import image from '../../../../../public/cardimage/img1.png'
import Image from 'next/image'

import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';


import img1 from '../../../../../public/cardimage/img1.png' 
import img2 from '../../../../../public/cardimage/img2.png'
import img3 from '../../../../../public/cardimage/img3.png'



function Details() {


    

    return (
        <div className=' max-w-[1440px]  bg-white mx-auto -mt-20 pt-20'>

            <div>
                {/* section 1 */}
                <div className=' grid grid-cols-2 items-center justify-center  px-32 gap-11'>
                    {/* image section */}
                    <div>
                        <Image src={image} className=' h-full w-full'></Image>
                    </div>
                    <div>
                        {/* button review title, weight description */}
                        <div>
                            <div className='mx-auto '>
                                <button className=' flex items-center justify-center w-36 h-8 text-[#749B3F] text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium mb-4'>Our Products</button>
                                <h1 className=' text-5xl font-medium text-[#212337] mb-4'>Coconut</h1>
                                <div className=' flex gap-2 mb-4'>
                                    <div className=' flex items-center gap-1'>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                    </div>
                                    <div className=' flex gap-1 items-center'>
                                        <h5 className='text-2xl font-[700] text-black'>5.0</h5>
                                        <h5 className='text-lg font-[500] text-black'>(1 Review)</h5>
                                    </div>
                                </div>
                                <div className=' mb-4'>
                                    <h3 className=' text-[32px] font-semibold text-[#FF6A1A]'>$6.3/kg</h3>
                                </div>
                                <div className='mb-4'>
                                    <p className=' text-lg text-[#4A4A52] leading-6'>
                                        From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* quentity and  */}
                        <div className=' mt-4'>
                            <div className=' flex items-center gap-2 '>
                                <h5 className=' text-black text-lg font-medium'>Quentity</h5>
                                <div className='grid grid-cols-3 border  border-gray-500 w-40'>
                                    <div className=' text-black text-2xl border-r-2 text-center'>
                                        -
                                    </div>
                                    <div className='text-black font-bold text-xl border-r-2 text-center flex items-center justify-center'>
                                        1
                                    </div>
                                    <div className=' text-black text-2xl justify-center text-center'>
                                        +
                                    </div>

                                </div>
                                <h5 className=' text-black text-lg font-medium'>/kg</h5>
                            </div>
                        </div>

                        {/* button section */}
                        <div className=' mt-6 grid grid-cols-2 gap-6 '>
                            <div>
                                <button className=' w-full btn shadow-none text-lg rounded-lg bg-[#F4F6F6] py-6 border-none text-[#4A4A52] font-bold'> <span><MdFavorite className=' text-2xl text-[#D9D9D9]' /></span>Save as favorite </button>
                            </div>


                            <div>
                                <button className=' w-full btn shadow-none text-lg rounded-lg bg-[#FF6A19] py-6 border-none text-white font-bold'> <span><FaShoppingCart className=' text-2xl text-white' /></span>Add To Cart </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 2 */}

                <div>
                    <div className='mx-auto px-[45%] pt-20'>
                        <button className=' flex items-center justify-center w-36 h-8 text-[#749B3F] text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium '>Our Products</button>
                    </div>
                    <div>
                        <h1 className=' text-5xl font-medium text-[#212337] text-center'>Related products</h1>
                    </div>

                    {/* card section */}
                    <div className=''>
                        <div className=' grid grid-cols-4 gap-6 px-32 mb-3 mt-10' >
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img1}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img2}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img3}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img2}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img1}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img3}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img2}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-3 rounded-[20px] h-[360px]">

                                    <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                        <Image src={img1}></Image>
                                    </div>
                                    <div className="">
                                        <h2 className=" text-lg text-[#212337] text-center font-medium">Mushroom</h2>
                                        <p className=" text-lg text-[#212337] text-center font-[400] pt-2">$2.3/kg</p>
                                        <div className=" mt-3 mb-2">
                                            <button className="btn btn-outline border border-[#A6A6A6] text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details