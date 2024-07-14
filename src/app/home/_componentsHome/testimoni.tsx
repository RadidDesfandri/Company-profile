"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import cth from '@/app/components/images/bghero.jpg'
import human1 from '@/app/home/_componentsHome/assetHome/human1.jpg'
import human2 from '@/app/home/_componentsHome/assetHome/human2.jpg'
import human3 from '@/app/home/_componentsHome/assetHome/human3.jpg'
import human4 from '@/app/home/_componentsHome/assetHome/human4.jpg'
import human5 from '@/app/home/_componentsHome/assetHome/human5.jpg'

export default function Testimoni() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className='w-full py-28 bg-[#0C0C0C]'>
            <div className='embla max-w-7xl'>
                <h1 className='text-white lg:text-4xl text-3xl font-bold text-center'>What Our Custumer Say</h1>
                <p className='text-slate-200 text-center px-8 lg:px-0 text-sm lg:text-base pb-10'>See how Alpha customers are growing their businesses and getting incredible results.</p>
                <div className="embla__viewport max-w-sm rounded-md lg:max-w-2xl mx-auto  h-[370px] bg-slate-900" ref={emblaRef}>
                    <div className="embla__container h-full">
                        <div className="embla__slide flex flex-col items-center justify-center">
                            <Image src={human1} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-cover' />
                            <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                            <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>&quot;Alpha matched our expectation for several rasons.We loved its flexibility, ease of operation, and pace of scalability. It was intiutive to pick up and adopt, and had a very  user-frienldly interface that was  easy to adapt&quot;</p>
                            <p className='text-white  text-lg font-semibold'>PATRICA PORTIK</p>
                            <p className='text-sm text-slate-200 text-center px-8'>National Sales Operational/ E Marketing Manager</p>
                        </div>
                        <div className="embla__slide flex flex-col items-center justify-center">
                            <Image src={human2} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-cover' />
                            <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                            <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>&quot;We have been working with Robotica for over two years, and the results have been incredible. Their robots are powerful and innovative, helping us automate processes that previously took a lot of time.&quot;</p>
                            <p className='text-white  text-lg font-semibold'>FRANK LOUGHAN</p>
                            <p className='text-sm text-slate-200 text-center px-8'>VP Revenue Operations ARC Document Solutions</p>
                        </div>
                        <div className="embla__slide flex flex-col items-center justify-center">
                            <Image src={human3} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-cover' />
                            <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                            <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>&quot;We were very impressed with the quality and performance of the robots from Innovate Robotics. They help us optimize production processes and reduce operational costs. Their customer support is also very professional and always ready to help.&quot;</p>
                            <p className='text-white  text-lg font-semibold'>AARAN GOH</p>
                            <p className='text-sm text-slate-200 text-center px-8'>Head Of Sales Ai</p>
                        </div>
                        <div className="embla__slide flex flex-col items-center justify-center">
                            <Image src={human4} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-top object-cover' />
                            <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                            <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>&quot;We are very satisfied with the service from FutureBots. Their robots are very advanced and easy to integrate into our systems. Their team is also very professional and helpful in every step of the process.&quot;</p>
                            <p className='text-white  text-lg font-semibold'>SYAHRUL FATH</p>
                            <p className='text-sm text-slate-200 text-center px-8'>Head of Marketing Spenmo</p>
                        </div>
                        <div className="embla__slide flex flex-col items-center justify-center">
                            <Image src={human5} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-right-top object-cover' />
                            <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                            <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>&quot;Our decision to come together with Alpha was the best. Their robots are highly efficient and have increased productivity in our factory. We really appreciate their commitment to quality and innovation.&quot;</p>
                            <p className='text-white  text-lg font-semibold'>MARIE MORGANA</p>
                            <p className='text-sm text-slate-200 text-center px-8'>VP of Marketing EngangeRocket</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-5 lg:px-20 px-4 lg:relative lg:bottom-56'>
                    <button className="embla__prev text-white" onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                    </button>
                    <button className="embla__next text-white" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
