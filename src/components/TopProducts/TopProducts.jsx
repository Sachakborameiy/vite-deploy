import React from 'react';
import SchemaData from '../../utils/SchemaData';
import { FaStar } from 'react-icons/fa6';

const TopProducts = ({handleOrderPopup}) => {
    return (
        <div>
            <div className='container'>
                {/* Header Section  */}
                <div className='text-left mb-24'>
                    <p className='text-sm text-primary'>Top Rated Products for you</p>
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, earum id nemo ullam officiis totam. Quam tenetur provident libero magni. Ut, maiores ratione! Tempora, accusantium velit. Obcaecati dolores quibusdam dolore.
                    </p>
                </div>
                {/* Body Section  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        SchemaData.TopProductData.map((data) => (
                            <div 
                                data-aos="zoom-in"
                                className='rounded-2xl bg-white
                                dark:bg-gray-800 hover:bg-black/80
                                dark:hover:bg-primary hover:text-white relative
                                shadow-xl duration-high group max-w-[300px]'>
                                {/* image section  */}
                                <div className='h-[100px]'>
                                    <img 
                                        src={data.img} 
                                        alt="" 
                                        className='max-w-[140px] block mx-auto
                                        transform -translate-y-20 group-hover:scale-150 duration-300
                                        drop-shadow-md'
                                    />
                                </div>
                                {/* details sections  */}
                                <div className='p-4 text-center'>
                                    {/* star rating  */}
                                    <div className='w-full flex items-center
                                    justify-center gap-1'>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button onClick={handleOrderPopup} className='bg-primary hover:scale-105 duration-300
                                    text-white py-1 px-4 rounded-full md-4 group-hover:bg-white
                                    group-hover:text-primary mt-2'>Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopProducts;
