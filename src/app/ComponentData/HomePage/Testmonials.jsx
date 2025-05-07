import React from 'react'

import footerimg from '../../../../public/cardimage/Footerimg.png'
import imageFrutes from '../../../../public/cardimage/imageFrutes.png'
import leftleaf from '../../../../public/cardimage/leftleaf.png'
import rightleaf from '../../../../public/cardimage/rightleaf.png'
import farmarimage from '../../../../public/cardimage/farmarimage.png'
import Image from 'next/image'

function Testmonials() {
    return (
        <div className='max-w-[1440px] mx-auto bg-white mt-0 lg:mt-[400px] pb-10'>
            <div className=' grid lg:grid-cols-9 px-3 lg:px-28'>
                <div className=' lg:col-span-2 flex items-center pt-5 lg:pt-32'>
                    <Image src={leftleaf} className=' '></Image>
                </div>
                <div className=' lg:col-span-5 pt-2 lg:pt-20'>
                    <div className=' '>
                        <div className=' flex items-center justify-center'>
                            <button className=' flex items-center justify-center w-[100px] lg:w-36 h-8 text-[#749B3F] text-sm lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium '>Testimonial</button>

                        </div>
                    </div>
                    <div className=' pt-3'>
                        <h1 className='text-3xl lg:text-5xl text-center font-medium text-[#212337] pb-5'>What Our Customers Says</h1>

                        <p className='  w-[100%] lg:w-[60%] text-[12px] lg:text-sm font-[400] leading-5 lg:leading-6 text-center  mx-auto text-[#4A4A52]'>
                            Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
                        </p>

                    </div>
                </div>

                <div className='lg:col-span-2 pr-40 pt-0 lg:pt-40 flex items-end justify-end '>
                    <Image src={rightleaf} alt="Right Leaf " className='hidden lg:block' />
                </div>

            </div>
            <div className=' grid lg:grid-cols-3 px-3 lg:px-28 pt-4'>
                <div className=' lg:col-span-1 px-[10%]'>
                    <Image src={farmarimage}></Image>
                </div>
                <div className=' lg:col-span-2 flex items-center justify-center mt-5 lg:mt-0'>
                    <div className=' bg-[#F4F6F6] rounded-3xl p-8'>
                        <p className=' text-sm lg:text-lg text-[#4A4A52] font-normal leading-6 lg:leading-8'>
                        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.
                        </p>
                        <p className=' text-[#212337] pt-5'>
                        <span className=' text-lg font-semibold'>Jane Doe -</span> Professional chef
                        </p>
                    </div>
                </div>


            </div>
            <div className=' flex items-center justify-center gap-2 pt-16'>
                <div className='h-4 w-4 rounded-full bg-[#749B3F]'>

                </div>
                <div className='h-4 w-4 rounded-full bg-[#D9D9D9]'>

                </div>
                <div className='h-4 w-4 rounded-full bg-[#D9D9D9]'>

                </div>
            </div>
        </div>
    )
}

export default Testmonials