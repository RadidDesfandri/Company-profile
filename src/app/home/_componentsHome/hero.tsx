import React from 'react'
import Image from 'next/image'
import logo from '@/app/components/images/ai.png'

function Hero() {
    return (
        <section className='w-full pt-16 max-w-7xl bg-[#0C0C0C] '>
            <div className='mx-auto pt-16 relative'>
                <div className='absolute w-44 h-44 lg:w-60 lg:h-60 bg-blue-600 rounded-full blur-[100px] opacity-70 lg:left-64 lg:top-16 lg:opacity-60 animate-pulse'></div>
                <div className='hidden lg:flex'>
                    <div className='absolute w-32 h-32 bg-blue-600 rounded-full top-80 left-[800px] blur-[100px] animate-pulse '></div>

                </div>

                <div className='lg:hidden z-30 absolute w-full h-40 lg:top-4 flex justify-center'>
                    <div className='text-white absolute bg-gray-900/80 border rounded-md p-3 lg:p-5 z-50 text-center'>
                        <h1 className='text-3xl font-semibold lg:text-5xl'>Everything</h1>
                        <p className='text-gray-300'>will be easy using technology</p>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center lg:px-32 lg:justify-between'>
                    <div className='w-[300px] lg:w-[350px] z-20'>
                        <Image
                            src={logo}
                            width={500}
                            alt='ai robot'
                        />
                    </div>
                    <div className='bg-gray-900 w-[1000px] lg:w-[350px] lg:bg-transparent lg:justify-normal flex justify-center py-16 '>
                        <div className='lg:bg-transparent border-4 p-7  lg:p-10 w-[350px] lg:h-64'>
                            <h1 className='text-4xl text-white font-semibold pb-4 lg:text-white '><span className='lg:bg-slate-300  lg:bg-opacity-50 '>Future</span> Technologies</h1>
                            <p className='text-gray-300 text-sm'>The future is fast approaching, and a new era of digital innovation and disruption is here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero