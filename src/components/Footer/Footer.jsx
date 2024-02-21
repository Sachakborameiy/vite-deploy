import React from 'react';
import FooterImage from '../../assets/bg/footer-pattern.jpg';
import SchemaData from '../../utils/SchemaData';
import Logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile, FaMobileRetro, FaMobileScreen } from 'react-icons/fa6';

const BannerImg = {
    backgroundImage: `url(${FooterImage})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Footer = () => {
    return (
        <div 
            style={BannerImg}
            className='text-white'
        >
            <div className='container'>
                <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={Logo} alt="" className='max-w-[50px]'/>
                            Boramei-Shop
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam odio optio itaque vel quaerat a minima! Consectetur harum voluptatibus excepturi, optio id nulla adipisci! Placeat asperiores deserunt quae voluptas?</p>
                    </div>

                    {/* Footer Links  */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-xl font-bold
                                sm:text-left text-justify mb-3'>
                                    Important Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        SchemaData.FooterLink.map((link) => (
                                            <li key={link.title}
                                             className='cursor-pointer hover:text-primary
                                             hover:translate-x-1 duration-300 text-gray-200'
                                            >
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-xl font-bold
                                sm:text-left text-justify mb-3'>
                                    Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        SchemaData.FooterLink.map((link) => (
                                            <li key={link.title}
                                             className='cursor-pointer hover:text-primary
                                             hover:translate-x-1 duration-300 text-gray-200'
                                            >
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* social links  */}
                        <div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl'/>
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow/>
                                    <p>Phnom Penh Capital City</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileScreen/>
                                    <p>+(855) 92 208 280</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
