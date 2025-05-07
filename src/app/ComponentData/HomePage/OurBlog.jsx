import React from 'react'

import farm1 from '../../../../public/cardimage/farm1.png'
import farm2 from '../../../../public/cardimage/farm2.png'
import farm3 from '../../../../public/cardimage/farm3.png'
import rightleaf from '../../../../public/cardimage/rightleaf.png'
import farmarimage from '../../../../public/cardimage/farmarimage.png'
import Image from 'next/image'
import { IoArrowForwardSharp } from 'react-icons/io5'

function OurBlog() {
    return (
        <div className='max-w-[1440px] mx-auto bg-white pb-10 pt-16'>
            <div className=' px-3 lg:px-28'>

                <div className='  '>
                    <div className=' '>
                        <div className=' flex items-center justify-center'>
                            <button className=' flex items-center justify-center w-20 lg:w-36 h-8 text-[#749B3F] text-[12px] lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium '>Our Blog</button>

                        </div>
                    </div>
                    <div className=' pt-3'>
                        <h1 className='text-3xl lg:text-5xl text-center font-medium text-[#212337] pb-3'>Fresh Harvest Blog</h1>

                        <p className='w-[100%] lg:w-[40%] text-[12px] lg:text-sm font-[400] leading-5 lg:leading-6 text-center  mx-auto text-[#4A4A52]'>
                            Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
                        </p>

                    </div>
                </div>

                <div className=' relative hidden lg:block'>
                    <div className=' absolute right-52 top-0 mt-2 lg:-mt-20'  >
                        <Image src={rightleaf} alt="Right Leaf" className='' />
                    </div>
                </div>

            </div>
            <div className=' grid lg:grid-cols-3 px-3 lg:px-28 mt-7 gap-6'>
                <div >
                    <Image src={farm1} className=' w-full h-64 rounded-[20px] pb-2'></Image>
                    <div className=' '>
                        <p className=' text-[#4A4A52] text-lg font-normal pb-2'>
                            May 23, 2024
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#212337] pb-2'>
                            Exploring Seasonal Delights: A Guide to What's Fresh Right Now
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#FF6A1A] flex items-center gap-2 '>
                            <span className=' hover:border-b-2 border-[#FF6A1A]'> Read More</span> <span><IoArrowForwardSharp className='' /></span>
                        </p>
                    </div>
                </div>
                <div >
                    <Image src={farm2} className=' w-full h-64 rounded-[20px] pb-2'></Image>
                    <div className=' '>
                        <p className=' text-[#4A4A52] text-lg font-normal pb-2'>
                            May 23, 2024
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#212337] pb-2'>
                            Exploring Seasonal Delights: A Guide to What's Fresh Right Now
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#FF6A1A] flex items-center gap-2 '>
                            <span className=' hover:border-b-2 border-[#FF6A1A]'> Read More</span> <span><IoArrowForwardSharp className='' /></span>
                        </p>
                    </div>
                </div>
                <div >
                    <Image src={farm3} className=' w-full h-64 rounded-[20px] pb-2'></Image>
                    <div className=' '>
                        <p className=' text-[#4A4A52] text-lg font-normal pb-2'>
                            May 23, 2024
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#212337] pb-2'>
                            Exploring Seasonal Delights: A Guide to What's Fresh Right Now
                        </p>
                        <p className=' text-lg font-[500] font-[#212337] leading-6 text-[#FF6A1A] flex items-center gap-2 '>
                            <span className=' hover:border-b-2 border-[#FF6A1A]'> Read More</span> <span><IoArrowForwardSharp className='' /></span>
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default OurBlog