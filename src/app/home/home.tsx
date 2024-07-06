import React from 'react'
import Image from 'next/image'
import logo from '../components/images/ai.png'

function HomePage() {
    return (
        <section id='home' className='w-full max-w-8xl bg-[#0C0C0C] '>
            <div className=' max-w-6xl mx-auto pt-16 relative'>
                <div className='absolute w-44 h-44 lg:w-60 lg:h-60 bg-blue-600 rounded-full blur-[100px] opacity-70 lg:left-64 lg:top-16 lg:opacity-60'></div>
                <div></div>
                <div className='flex flex-wrap items-center justify-center'>
                    <div className='w-[390px]' >
                        <Image
                            src={logo}
                            width={500}
                            alt='ai robot'
                            className='drop-shadow-[1px_1px_10px_grey]'
                        />
                    </div>
                    <div className='w-[1000px] z-20 lg:bg-transparent lg:w-0 bg-blue-400 flex items-center justify-center py-16 '>
                        <div className='lg:bg-transparent border-4 p-7  lg:p-10 w-[350px] lg:h-64'>
                            <h1 className='text-4xl text-[#151515] font-semibold pb-4 lg:text-white '><span className='lg:bg-slate-300 lg:text-black lg:bg-opacity-50 '>Future</span> Technologies</h1>
                            <p className='text-gray-300 text-sm'>The future is fast approaching, and a new era of digital innovation and disruption is here.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomePage