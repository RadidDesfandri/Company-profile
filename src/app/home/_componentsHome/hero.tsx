import React from 'react'
import Image from 'next/image'
import hero from '@/app/components/images/bghero.jpg'
import logo from '@/app/components/images/ai.png'

function Hero() {
    return (
        <section className='w-full mx-auto lg:bg-[#0C0C0C]'>
            <div className='mx-auto max-w-screen-2xl pt-16 relative bg-[#0C0C0C] lg:-z-0 -z-20'>
                <div className='absolute w-44 h-44 lg:w-60 lg:h-60 bg-blue-600 rounded-full blur-[70px] opacity-70 lg:left-64 lg:top-16 lg:opacity-60 animate-pulse'></div>
                <div className='flex flex-col items-center lg:items-start'>
                    <Image
                        src={hero}
                        alt='hero'
                        priority={true}
                        className='bg-black opacity-40 w-screen object-cover h-[450px]'
                    />
                    <div className='flex flex-wrap justify-center mx-80'>
                        <Image
                            src={logo}
                            alt='ai robot'
                            priority={true}
                            className='w-[260px] absolute top-[136px] lg:w-[300px] lg:top-[77.5px]'
                        />
                        <p className='lg:w-[400px] text-center lg:text-left w-[380px] mt-10 lg:mt-0  rounded-md border-2 border-blue-700 lg:border-none drop-shadow-[1px_1px_2px_blue] text-4xl lg:text-6xl text-white font-bold lg:absolute lg:top-[160px] lg:left-[700px]' ><span className='font-serif text-5xl lg:text-7xl'>&quot;</span>Innovating the Future, One <span className='text-blue-600 drop-shadow-[0_1px_1px_blue] '>Robot</span> at a Time<span className='font-serif text-5xl lg:text-7xl'>&quot;</span></p>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero