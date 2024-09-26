import React from 'react'
import iconsImg from '../ImgesFolder/footerIcon.png'


export default function FooterSection() {
    return (
        <footer>
            <div className='bg-[#151515] h-96 p-5 lg:p-0 lg:h-56 lg:flex lg:flex-row lg:justify-center lg:items-center'>
                <div className='flex flex-col justify-between h-[320px] lg:h-[130px] lg:w-[85%] lg:flex lg:flex-row lg:justify-between'>
                    <div className='h-[260px] flex flex-col justify-between lg:h-[130px] lg:w-[70%] lg:flex-row lg:justify-between'>
                        <div>
                            <h1 className='text-3xl lg:text-5xl  font-big mix-blend-difference text-white font-bold'>MODERN <br />ART GALLERY</h1>
                        </div>
                        <div className='w-[100%] h-[140px] text-[20px] lg:h-[125px] lg:w-[400px]'>
                            <p className='text-[#FFFFFF]'>
                                The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={iconsImg} alt="Icons Image" />
                    </div>
                </div>
            </div>

        </footer>
    )
}
