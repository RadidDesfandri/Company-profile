import Image from 'next/image'
import React from 'react'
import globe from '@/app/components/images/globe.jpg'
import employe from '@/app/components/images/poeple.png'
import internet from '@/app/components/images/internet.jpg'
import Link from 'next/link'

function ByTheNumber() {
    return (
        <section className='w-full py-20 bg-stone-950'>
                <h1 className='text-3xl pb-8 text-center font-semibold text-white lg:text-4xl lg:pb-14'>Alpha By the Numbers</h1>
            <div className='max-w-7xl mx-auto flex flex-col lg:justify-center lg:flex-row items-center gap-5'>
                <div className='w-[370px] h-[250px] bg-slate-700 bg-opacity-25 rounded-md flex flex-col items-center p-6'>
                    <Image src={globe} alt='globe office' width={130} className='rounded-full' />
                    <p className='font-bold text-gray-200 pt-5'>12 Global Offices</p>
                    <Link href={'#'} className='text-blue-700 hover:opacity-70 transition-all duration-100'>Learn more</Link>
                </div>
                <div className='w-[370px] h-[250px] bg-slate-700 bg-opacity-25 rounded-md flex flex-col items-center p-6'>
                    <Image src={employe} alt='globe office' width={130} className='rounded-full' />
                    <p className='font-bold text-gray-200 pt-5'>7,600 Employees</p>
                    <Link href={'#'} className='text-blue-700 hover:opacity-70 transition-all duration-100'>Learn more</Link>
                </div>
                <div className='w-[370px] h-[250px] bg-slate-700 bg-opacity-25 rounded-md flex flex-col items-center p-6'>
                    <Image src={internet} alt='globe office' width={130} className='rounded-full' />
                    <p className='font-bold text-gray-200 pt-5'>216,000 Customers</p>
                    <Link href={'#'} className='text-blue-700 hover:opacity-70 transition-all duration-100'>Learn more</Link>
                </div>
            </div>
        </section>
    )
}

export default ByTheNumber