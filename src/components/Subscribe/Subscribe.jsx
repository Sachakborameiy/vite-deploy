import React from 'react';
import Banner from "../../assets/banner/banner.jpg";

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Subscribe = () => {
    return (
        <div 
         data-aos="zoom-in"
         className='bg-gray-100 mb-20 dark:bg-gray-800 text-white'
         style={BannerImage}
         >
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                    <input data-aos="fade-up" type="text" placeholder='Enter your email' className='w-full p-3'/>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
