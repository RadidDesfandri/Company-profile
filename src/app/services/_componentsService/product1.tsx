import Image from 'next/image'
import React from 'react'
import product from '@/app/components/images/bgCover.jpg'
import Link from 'next/link'

function Product1() {
    return (
        <section className='w-full bg-[#0C0C0C] pt-14'>
            <div className='max-w-screen-2xl mx-auto relative'>
                <div>
                    <Image src={product} alt='bg-produk' width={1000} className='w-screen object-cover h-[590px] bg-blue-950 opacity-40 ' />
                </div>
                <div className='absolute top-44 px-6 lg:top-40 lg:px-14'>
                    <h2 className='text-2xl lg:text-4xl lg:text-left text-gray-200 font-semibold text-center drop-shadow-[1px_1px_1px_blue]'>Voltrive one</h2>
                    <h1 className='text-5xl lg:text-7xl lg:w-[605px] lg:text-left font-bold text-white text-center drop-shadow-[1px_1px_1px_blue]'>The Alpha for the AI Robots era</h1>
                    <Link href={'#produk2'} className='flex justify-center mt-11 lg:justify-start'>
                        <button className='flex items-center bg-transparent backdrop-blur-lg border gap-1 border-blue-600 px-3 py-2 text-[12px] text-white lg:text-sm  rounded-full font-bold hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200 '>See Products
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Product1