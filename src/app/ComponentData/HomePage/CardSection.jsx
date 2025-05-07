"use client";

import Image from 'next/image';
import bannerimage from '../../../../public/cardimage/Image.png';
import { useEffect, useState } from 'react';

function CardSection() {
    const [carddata, setcarddata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setcarddata(data);
                setFilteredData(data); 
                const uniqueCategories = ['All', ...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredData(carddata);
        } else {
            const filtered = carddata.filter(item => item.category === category);
            setFilteredData(filtered);
        }
    };

    return (
        <div className='max-w-[1440px] mx-auto bg-[#FFFFFF]'>
            <div>
                {/* Section Title */}
                <div className='mx-auto flex items-start justify-center pb-3 pt-20'>
                    <button className='flex items-center justify-center w-36 h-8 text-[#749B3F] text-sm lg:text-xl border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium'>
                        Our Products
                    </button>
                </div>
                <h1 className='text-3xl lg:text-5xl pb-3 font-medium text-[#212337] text-center'>
                    Our Fresh Products
                </h1>
                <p className='text-12 lg:text-sm leading-5 lg:leading-6 font-normal text-[#4A4A52] text-center px-5 lg:px-[35%]'>
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                </p>

                {/* Category Buttons */}
                <div className='flex gap-3 lg:gap-6 items-center justify-center my-8 px-3 lg:px-0 flex-wrap'>
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(cat)}
                            className={`btn btn-outline h-[45px] px-3 text-[12px] lg:text-lg font-normal rounded-lg
                ${selectedCategory === cat ? 'text-white bg-[#749B3F] border-none' : 'text-[#A6A6A6] outline-[#A6A6A6]'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className='mb-3 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 px-5 lg:px-32'>
                    {filteredData.map((card, index) => (
                        <div key={index}>
                            <div className="card bg-white shadow-sm shadow-[#dfe0e0] p-2 lg:p-3 rounded-lg lg:rounded-[20px] h-52 lg:h-[360px]">
                                <div className='bg-[#F4F6F6] h-[208px] rounded-2xl flex items-center justify-center'>
                                    <img src={card.image} className='h-28 w-28 lg:h-full lg:w-full' alt={card.title} />
                                </div>
                                <div>
                                    <h2 className="text-[12px] lg:text-lg text-[#212337] text-center font-medium">{card.title}</h2>
                                    <p className="text-[12px] lg:text-lg text-[#212337] text-center font-[400] pt-2">${card.price}/kg</p>
                                    <div className="mt-1 lg:mt-3 mb-2">
                                        <button className="h-7 lg:h-full btn btn-outline border hover:bg-[#FF6A19] hover:border-none hover:shadow-2xs border-[#A6A6A6] text-[11px] lg:text-lg font-[400] text-black w-full rounded-lg">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* About Section */}
                <div className='px-3 lg:px-32'>
                    <div className='flex items-center justify-center mt-7'>
                        <button className='btn btn-outline outline-[#FF6A1A] hover:btn-outline text-[#FF6A1A] h-[45px] px-3 text-sm lg:text-lg font-[600] rounded-lg'>
                            See All Products
                        </button>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-0 lg:gap-10'>
                        <div className='-mt-0 lg:-mt-16'>
                            <Image src={bannerimage} alt="About Banner" className='h-full w-full' />
                        </div>
                        <div>
                            <div className='pt-20 pb-4'>
                                <button className='w-20 lg:w-36 h-8 text-[#749B3F] text-sm lg:text-xl border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium'>
                                    About Us
                                </button>
                            </div>
                            <h1 className='text-3xl lg:text-5xl font-[500] text-black pb-4'>About Fresh Harvest</h1>
                            <p className='text-[#4A4A52] text-[12px] lg:text-sm font-[400] leading-4 lg:leading-6 pb-4'>
                            Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                            </p>
                            <div className='pb-7'>
                                <button className='btn btn-outline outline-[#FF6A1A] hover:btn-outline text-[#FF6A1A] h-[53px] w-32 lg:w-40 px-3 text-sm lg:text-lg font-[600] rounded-lg'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSection;
