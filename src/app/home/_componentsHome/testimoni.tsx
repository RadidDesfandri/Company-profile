"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function Testimoni() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const data = [
        { img: './assetHome/human1.jpg', desc: '"Alpha matched our expectation for several rasons.We loved its flexibility, ease of operation, and pace of scalability. It was intiutive to pick up and adopt, and had a very  user-frienldly interface that was  easy to adapt"', name: 'PATRICA PORTIK', pos: 'National Sales Operational/ E Marketing Manager' },
        { img: './assetHome/human2.jpg', desc: '"We have been working with Robotica for over two years, and the results have been incredible. Their robots are powerful and innovative, helping us automate processes that previously took a lot of time."', name: 'FRANK LOUGHAN', pos: 'VP Revenue Operations ARC Document Solutions' },
        { img: './assetHome/human3.jpg', desc: '"We were very impressed with the quality and performance of the robots from Innovate Robotics. They help us optimize production processes and reduce operational costs. Their customer support is also very professional and always ready to help."', name: 'AARAN GOH', pos: 'Head Of Sales Ai' },
        { img: './assetHome/human4.jpg', desc: '"We are very satisfied with the service from FutureBots. Their robots are very advanced and easy to integrate into our systems. Their team is also very professional and helpful in every step of the process."', name: 'SYAHRUL FATH', pos: 'Head of Marketing Spenmo' },
        { img: './assetHome/human5.jpg', desc: '"Our decision to come together with Alpha was the best. Their robots are highly efficient and have increased productivity in our factory. We really appreciate their commitment to quality and innovation."', name: 'MARIE MORGANA', pos: 'VP of Marketing EngangeRocket' },
    ]

    return (
        <section className='w-full py-28 bg-[#0C0C0C]'>
            <div className='embla max-w-7xl'>
                <h1 className='text-white lg:text-4xl text-3xl font-bold text-center'>What Our Custumer Say</h1>
                <p className='text-slate-200 text-center px-8 lg:px-0 text-sm lg:text-base pb-10'>See how Alpha customers are growing their businesses and getting incredible results.</p>
                <div className="embla__viewport max-w-sm rounded-md lg:max-w-2xl mx-auto  h-[370px] bg-slate-900" ref={emblaRef}>
                    <div className="embla__container h-full">
                        {data.map((item, key) => (
                            <div key={key} className="embla__slide flex flex-col items-center justify-center">
                                <Image src={item.img} alt='person' width={150} height={150} className='w-[130px] h-[130px]  rounded-full object-cover' />
                                <div className='h-2 w-full -z-10 bg-gray-500 absolute top-0'></div>
                                <p className='text-slate-200 text-center pt-4 pb-6 px-8 lg:px-16 text-sm'>{item.desc}</p>
                                <p className='text-white  text-lg font-semibold'>{item.name}</p>
                                <p className='text-sm text-slate-200 text-center px-8'>{item.pos}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between pt-5 lg:px-20 px-4 lg:relative lg:bottom-56'>
                    <p className="embla__prev text-white cursor-pointer" onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                    </p>
                    <p className="embla__next text-white cursor-pointer" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                    </p>
                </div>
            </div>
        </section>
    )
}
