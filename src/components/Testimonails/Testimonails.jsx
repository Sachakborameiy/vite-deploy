import React from 'react';
import SchemaData from '../../utils/SchemaData';
import Slider from 'react-slick';

const Testimonails = () => {

    var settings = {
        dots: true,
        arrows: false,
        infintie: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infintie: true,
            }
          },  
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            }
          },  
          {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          },  
        ],
    };

    return (
        <div className='py-10 mb-10'>
            {/* Header Section  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary'>What our customers are saying</p>
                <h1 className='text-3xl font-bold'>Testimonails</h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, earum id nemo ullam officiis totam. Quam tenetur provident libero magni. Ut, maiores ratione! Tempora, accusantium velit. Obcaecati dolores quibusdam dolore.
                </p>
            </div>
            {/* Body Section  */}
            <div className='container'>
                <Slider {...settings}>
                    {
                        SchemaData.testimonailData.map((data) => (
                            <div className='my-6'>
                                <div
                                    key={data.id}
                                    className='flex flex-col gap-4 shadow-lg 
                                    py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
                                    bg-primary/10 relative'
                                >
                                    <div className='mb-4'>
                                        <img className='rounded-full w-20 h-20' src={data.img} alt="" />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500 dark:text-gray-200'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light dark:text-white'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-300'>,,</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Testimonails;