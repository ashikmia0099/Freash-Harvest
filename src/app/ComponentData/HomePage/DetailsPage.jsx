"use client"
import Link from 'daisyui/components/link'
import React, { useEffect, useState } from 'react'

function DetailsPage() {




    const [carddata, setcarddata] = useState([])


    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setcarddata(data)
            })

    }, [])

    console.log(carddata);

    return (
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 px-5 lg:px-32 mb-3 mt-10' >
            {
                carddata.slice(-4).map((card, index) => (
                    <div key={index}>
                        <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-2 lg:p-3 rounded-lg lg:rounded-[20px] h-52 lg:h-[360px]">

                            <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>

                                <img src={card.image} className=' h-28 w-28 lg:h-full lg:w-full' alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-[12px] lg:text-lg text-[#212337] text-center font-medium">{card.title}</h2>
                                <p className="text-[12px] lg:text-lg text-[#212337] text-center font-[400] pt-2">${card.price}/kg</p>
                                <div className=" mt-1 lg:mt-3 mb-2">
                                    <button className="h-7 lg:h-full btn btn-outline border hover:bg-[#FF6A19] hover:border-none hover:shadow-2xs border-[#A6A6A6] text-[11px] lg:text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default DetailsPage