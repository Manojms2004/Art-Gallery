import React from 'react'
import imgHome from '../ImgesFolder/img1home.jpg'
import arrow from '../ImgesFolder/arrow.svg'
import { Link } from 'react-router-dom'
import MainSection from './MainSection.jsx'
import FooterSection from './FooterSection'

export default function HeadSection() {


    return (
        <header>
            <div className='lg:py-[60px] lg:px-[90px]'>
                <div className='lg:h-[100%] lg:w-[100%] lg:flex lg:justify-start'>
                    <div className='lg:bg-[#151515] lg:h-[800px] lg:w-[35%]'>

                    </div>
                    <div className='h-[300px] w-[100%] lg:h-[800px] lg:w-[16cm]'>
                        <img className='object-cover w-[100%] h-[100%] lg:h-[100%] lg:w-[100%]' src={imgHome} alt="ImgHome" />
                    </div>
                    <div className='h-[464px] flex flex-col p-8 justify-between lg:absolute  lg:right-8 lg:top-60 lg:w-[80%] lg:h-96 lg:flex lg:flex-row lg:justify-between' >
                        <div className=''>
                            <h1 className='lg:text-8xl text-6xl font-big mix-blend-difference lg:text-white font-bold'>MODERN <br />ART GALLERY</h1>
                        </div>
                        <div className='lg:w-[35%] lg:h-[100%] '>
                            <div className='h-[250px] flex justify-between items-start flex-col lg:relative left-8  lg:w-[100%] lg:h-[100%] lg:flex lg:flex-col lg:justify-between'>
                                <p className='text-xl lg:text-[#444444] lg:text-[20px] lg:tracking-wider lg:w-[76%]'> The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
                                <div className='flex lg:flex'>
                                    <div className='bg-[#151515] h-[80px] w-[200px] flex justify-center items-center'>
                                        <h1 className='text-3xl font-big mix-blend-difference text-white font-bold'>OUR LOCATION</h1>
                                    </div>
                                    <Link to='/location'>
                                        <button className='bg-[#D5966C] w-[80px] h-[80px] flex justify-center items-center'>
                                            <img className='h-18' src={arrow} alt="but 1 Image" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainSection />
            <FooterSection />
        </header>
    )
}
