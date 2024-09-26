import React from 'react'
import mainImg1 from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\mainImg1.jpg'
import mainImg2 from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\mainImg2.jpg'
import mainImg3 from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\mainImg3.jpg'
import mainImg4  from 'E:\\React_pro1\\web-design2\\src\\ImgesFolder\\mainImg4.png'

export default function MainSection () {
    return (
        <main>
            <div className='lg:p-36'>
                <div className='flex flex-col-reverse p-5 lg:p-0 lg:flex-row  lg:h-[400px] lg:justify-between'>
                    <div className='h-[320px] flex justify-around flex-col lg:w-[30%] lg:flex lg:flex-col lg:justify-between'>
                        <h1 className='lg:text-6xl text-6xl font-big mix-blend-difference lg:text-black font-bold'>YOUR DAY AT<br />THE GALLERY</h1>
                        <p className='text-[20px] lg:text-xl'>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                    </div>
                    <div className='lg:w-[634px] lg:h-[360px] h-[270px]'>
                        <img className='h-[267px] lg:w-[634px] lg:h-[360px]' src={mainImg1} alt="Main Imge 1" />
                    </div>
                </div>
                <div className='lg:flex lg:justify-between'>
                    <div className='p-4 lg:p-0 lg:h-[720px] lg:w-[720px]'>
                        <img className='lg:object-cover lg:h-[716px] lg:w-[720px]' src={mainImg2} alt="Image 2" />
                    </div>
                    <div className='lg:flex lg:justify-between lg:flex-col'>
                        <div className='p-4 lg:p-0 lg:h-[313px] lg:w-[445px]'>
                          <img className='' src={mainImg3} alt="Image 3" />
                        </div>
                        <div className='p-4 h-[440px] lg:p-0 lg:h-[383px] lg:w-[445px]'>
                          <img className='lg:w-[100%]' src={mainImg4} alt="Image 4" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
