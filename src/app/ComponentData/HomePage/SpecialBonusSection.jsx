import React from 'react'

import footerimg from '../../../../public/cardimage/Footerimg.png'
import imageFrutes from '../../../../public/cardimage/imageFrutes.png'
import Image from 'next/image'

function SpecialBonusSection() {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#EDEDED] '>
      <div className="  bg-[url('/cardimage/GroupTop.png')]  bg-cover bg-center   ">
        <div className=" bg-[url('/cardimage/GroupBottom.png')]  bg-cover bg-center   ">
          <div className=" px-3 lg:px-28 ">
            {/* text section */}
            <div className='pb-24' >
              <div className=' pt-[90px]'>
                <button className=' flex items-center justify-center w-28 lg:w-36 text-sm h-8 text-[#749B3F] lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium '>Our Products</button>
              </div>
              <div className=' pt-3'>
                <h1 className=' text-5xl lg:text-[80px] font-medium text-[#212337]'>Our Fresh Products</h1>

              </div>
              <div className=' pb-2'>
                <h1 className=' text-3xl lg:text-5xl font-medium text-[#212337] '>Discount up to <span className=' text-[#FF6A19]'>80% OFF</span></h1>

              </div>
              <div className=' grid grid-cols-4 gap-7 pt-8 w-[100%] lg:w-[40%] pr-3 '>

               
                <div className=' flex flex-col items-center justify-center bg-white rounded-xl w-[70px] lg:w-[98px] h-[90px] lg:h-[122px]'>
                  <h1 className='text-[28px] lg:text-[40px] font-normal text-black'>03</h1>
                  <br />
                  <p className=' text-lg font-normal text-black -mt-5'>days</p>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white rounded-xl w-[70px] lg:w-[98px] h-[90px] lg:h-[122px]'>
                  <h1 className='text-[28px] lg:text-[40px] font-normal text-black'>18</h1>
                  <br />
                  <p className=' text-lg font-normal text-black -mt-5'>Hour</p>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white rounded-xl w-[70px] lg:w-[98px] h-[90px] lg:h-[122px]'>
                  <h1 className='text-[28px] lg:text-[40px] font-normal text-black'>54</h1>
                  <br />
                  <p className=' text-lg font-normal text-black -mt-5'>Min</p>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white rounded-xl w-[70px] lg:w-[98px] h-[90px] lg:h-[122px]'>
                  <h1 className='text-[28px] lg:text-[40px] font-normal text-black'>21</h1>
                  <br />
                  <p className=' text-lg font-normal text-black -mt-5'>Sec</p>
                </div>
               

              </div>
              <div className=' pt-7'>
                <button className=' btn h-16 rounded-full bg-[#176D38] border-none  px-10'>
                  <span className=' text-[24px] lg:text-[32px] font-semibold text-white uppercase'>CODE : </span>
                  <span className=' text-[24px] lg:text-[32px] font-semibold text-[#FAC714] uppercase'>FRESH28</span>
                </button>

              </div>
            </div>

            {/* image section */}

            <div className="relative -mt-[400px] hidden lg:block">
              <div className="absolute right-0 -mr-16">
                <Image src={imageFrutes} alt="Fruits" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SpecialBonusSection