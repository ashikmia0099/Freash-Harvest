

import Image from 'next/image'


import clipimage from '../../../../public/cardimage/Clip_path.png'
import pizzaimg from '../../../../public/cardimage/pizza.png'
import { FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from "react-icons/io5";



function Banner() {

  
    return (
        <div className='max-w-[1440px] mx-auto -mt-24  '>
            <div className="bg-[url('/cardimage/Bg.png')]  bg-cover bg-center pt-20 px-3 lg:px-32 pb-32">
                <div className=' grid lg:grid-cols-2'>
                    <div>
                        <div className='mx-auto  pt-20 pb-4'>
                            <button className=' flex items-center justify-center  h-8 text-[#749B3F] text-sm lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium px-4'>Welcome to Fresh Harvest</button>
                        </div>
                        <div>
                            <h1 className='text-[#212337] text-5xl lg:text-[80px] font-[500] leading-10 lg:leading-16 pb-4'>Fresh Fruits and Vegetables</h1>
                            <p className=' text-[12px] lg:text-sm font-[400] text-[#4A4A52] pt-4 w-[80%]'>
                                At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
                            </p>
                            <button className=' btn text-sm lg:text-lg font-[600] w-28 lg:w-36 h-14 border-none bg-[#FF6A19] text-white shadow-none mt-8'>Shop Now</button>
                        </div>
                        {/* card section */}
                        <div className=' w-full lg:w-[600px] flex pl-0 lg:pl-32 gap-5 pt-5'>
                            {/* image secton */}
                            <div className=' hidden lg:block'>
                                <Image src={clipimage}></Image>
                            </div>
                            {/* card section */}
                            <div className=' h-28 lg:h-36 bg-[#EBEBEB] rounded-xl grid grid-cols-2  '>
                                <div className='p-3'>
                                    <p className='text-[#176D38] text-[8px] lg:text-sm font-[500]'>Special Offer</p>
                                    <h1 className='text-[16px] lg:text-3xl font-[500] text-[#212337]'>
                                        Fresh Salad
                                    </h1>
                                    <p className=' gap-2'>
                                        <span className='text-[#176D38] text-[10px] lg:text-[16px] font-[500]'>
                                            Up to
                                        </span>
                                        <span className='text-black text-sm lg:text-[24px] font-[500]'>
                                            70%
                                        </span>
                                        <span className='text-black text-[10px] lg:text-[16px] font-[500]'>
                                            off
                                        </span>
                                    </p>
                                    <div>
                                        {/* button section */}

                                        <button className=' btn text-lg font-[600] w-24 lg:w-36 h-7 border-none bg-[#176D38] text-white shadow-none  rounded-full'>

                                            <span className=' text-[7px] lg:text-[12px] font-semibold'>CODE : </span>
                                            <span className=' text-[7px] lg:text-[12px] font-semibold text-[#FAC714]'>FRESH25</span>
                                        </button>
                                    </div>
                                </div>
                                {/* image seciton */}
                                <div>
                                    <Image src={pizzaimg} className='  h-28 w-28 lg:h-40 lg:w-40 pb-2'></Image>
                                </div>
                            </div>

                        </div>

                        {/* following */}
                        <div className=' mt-10'>
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

                </div>
            </div>
        </div>
    )
}

export default Banner