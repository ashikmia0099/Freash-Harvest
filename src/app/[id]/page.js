// src/app/[id]/page.js
import { notFound } from 'next/navigation';
import data from '../../../public/data.json'; // Adjust path if needed
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import DetailsPage from '../ComponentData/HomePage/DetailsPage';

export async function generateStaticParams() {
    return data.map(item => ({ id: item.id.toString() }));
}

export default function ProductPage({ params }) {
    const product = data.find(item => item.id.toString() === params.id);



    if (!product) return notFound();

    return (
        <div className=' max-w-[1440px]  bg-white mx-auto -mt-20 pt-20'>

            <div className=' pt-10'>
                {/* section 1 */}
                <div className=' grid lg:grid-cols-2 items-center justify-center px-3 lg:px-32 gap-11'>
                    {/* image section */}
                    <div>

                        <img src={product.image} alt={product.title} className="h-full w-full" />
                    </div>
                    <div>
                        {/* button review title, weight description */}
                        <div>
                            <div className='mx-auto '>
                                <button className=' flex items-center justify-center  w-36 h-8 text-[#749B3F] text-sm lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium mb-4'>{product.category}</button>
                                <h1 className=' text-[32px] lg:text-5xl font-medium text-[#212337] mb-4'>{product.title}</h1>
                                <div className=' flex gap-2 mb-4'>
                                    <div className=' flex items-center gap-1'>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                        <span className=' text-yellow-400 text-xl'><FaStar /></span>
                                    </div>
                                    <div className=' flex gap-1 items-center'>
                                        <h5 className=' text-lg xl:text-2xl font-[700] text-black'>{product.rating}</h5>
                                        <h5 className='text-lg font-[500] text-black'>(1 Review)</h5>
                                    </div>
                                </div>
                                <div className=' mb-4'>
                                    <h3 className=' text-2xl lg:text-[32px] font-semibold text-[#FF6A1A]'>${product.price}/kg</h3>
                                </div>
                                <div className='mb-4'>
                                    <p className='text-sm lg:text-lg text-[#4A4A52] leading-6'>

                                        {product.description}
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
                                        {product.quantity}
                                    </div>
                                    <div className=' text-black text-2xl justify-center text-center'>
                                        +
                                    </div>

                                </div>
                                <h5 className=' text-black text-lg font-medium'>/kg</h5>
                            </div>
                        </div>

                        {/* button section */}
                        <div className=' mt-6 grid lg:grid-cols-2 gap-6 '>
                            <div>
                                <button className=' w-full btn shadow-none text-lg rounded-lg bg-[#F4F6F6] py-6 border-none text-[#4A4A52] font-bold'> <span><MdFavorite className=' text-2xl text-[#D9D9D9]' /></span>Save as favorite </button>
                            </div>


                            <div>
                                <button className=' w-full btn shadow-none text-lg rounded-lg bg-[#FF6A19] py-6 border-none text-white font-bold'> <span><FaShoppingCart className=' text-2xl text-white' /></span>Add To Cart </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* comment section */}

                <div className=' px-3 lg:px-32'>
                    {/* button section */}
                    <div className=' mt-6 flex items-center gap-6 '>
                        <div>
                            <button className=' w-[96px] lg:w-36 btn shadow-none text-[12px] lg:text-lg rounded-lg bg-[#749B3F] py-6 border-none text-white font-normal'> Description </button>
                        </div>


                        <div>
                            <button className=' w-[96px] lg:w-36 btn shadow-none text-[12px] lg:text-lg rounded-lg bg-white border-2 py-6 border-[#A6A6A6] text-[#A6A6A6] font-bold '> Review (1) </button>
                        </div>
                    </div>


                    {/* comment section */}

                    <div className=' bg-[#F4F6F6] rounded-3xl py-6 lg:py-10 px-6 lg:px-8 mt-6'>
                        <p className='text-sm lg:text-lg font-normal leading-6 text-[#4A4A52]'>
                            Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment. Whether you’re using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.

                            Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
                        </p>
                    </div>


                </div>

                {/* section 2 */}

                <div>
                    <div className='mx-auto px-0 flex items-center justify-center pt-20 pb-6'>
                        <button className=' flex items-center justify-center w-36 h-8 text-[#749B3F] text-sm lg:text-xl  border-none bg-[#F1F5EC] rounded-lg shadow-2xs font-medium '>Our Products</button>
                    </div>
                    <div>
                        <h1 className='text-[32px] lg:text-5xl font-medium text-[#212337] text-center'>Related products</h1>
                    </div>

                    {/* card section */}
                    <div className=''>


                        <DetailsPage></DetailsPage>

                    </div>
                </div>
            </div>

        </div>
    );
}
