import React from 'react'
import MapImg from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\MapsImg.png'
import TextLoca from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\LocationImg.png'
import FooterImg from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\footerImg.png'
import iconsImg from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\iconsImg.png'
import arrow from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\arrow.svg'
import { Link } from 'react-router-dom'

export default function LocationComp() {
    return (
        <div>
            {/* Map Location section */}
            <div className='w-[100%] h-[550px] lg:w-[100vw] lg:h-[600px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6848511249996!2d75.90313817324166!3d14.445316880863368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba2564f8a0d437%3A0x8fc2c7cd8453a9a3!2sICCA%20(Interface%20College%20of%20Computer%20Applications)!5e0!3m2!1sen!2sin!4v1727325507010!5m2!1sen!2sin" className='object-cover w-[100%] h-[550px] lg:w[100%] lg:h-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='left-0 flex absolute top-0 lg:left-28'>
                    <Link to='/'>
                        <button className='bg-[#D5966C] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center'>
                            <img className='h-18 rotate-180' src={arrow} alt="but 1 Image" />
                        </button>
                    </Link>
                    <div className='bg-[#151515] h-[60px] w-[160px] lg:h-[80px] lg:w-[200px] flex justify-center items-center'>
                        <h1 className='text-3xl font-big mix-blend-difference text-white font-bold'>BACK TO HOME</h1>
                    </div>
                </div>
            </div>
            {/* Text Content section */}
            <div className='h-[493px] flex items-center lg:w-[100%]  bg-black lg:h-[12cm] lg:flex  lg:justify-center lg:items-center'>
                <div className='p-3 lg:p-0 h-[440px] flex flex-col justify-between  lg:flex  lg:flex-row lg:w-[80%] lg:justify-between lg:h-[60%]'>
                    <div className=''>
                        <img src={TextLoca} alt="Text Location" />
                    </div>
                    <div className='h-[250px] flex flex-col justify-between lg:flex lg:flex-col lg:w-[43%] lg:h-[100%] lg:justify-between'>
                        <div className='h-[140px] flex flex-col justify-between lg:flex lg:flex-col lg:justify-between lg:h-[45%]'>
                            <p className='text-[#D5966C] text-3xl font-bold'>99 KING STREET</p>
                            <div>
                                <p className='text-[#FFFFFF]'>Newport</p>
                                <p className='text-[#FFFFFF]'>RI 02840</p>
                                <p className='text-[#FFFFFF]'>United States of Americab</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#FFFFFF]'>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer section */}
            <div className='bg-[#D5966C] h-96 flex justify-center items-center lg:h-56 lg:flex lg:justify-center lg:items-center'>
                <div className=' w-[90%] lg:p-0 h-80 flex flex-col justify-between lg:w-[85%] lg:h-[130px] lg:flex lg:flex-row lg:justify-between'>
                    <div className=' h-[250px] flex flex-col justify-between lg:w-[60%] lg:h-[100%] lg:flex lg:flex-row lg:justify-between'>
                        <div>
                            <img src={FooterImg} alt="text Image" />
                        </div>
                        <div className='w-[100%] h-[140px] text-[20px] lg:text-[20px] lg:h-[150px] lg:w-[50%]'>
                            <p className='text-[21.5px] lg:text-[20px]'>
                                The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={iconsImg} alt="Icons Image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
