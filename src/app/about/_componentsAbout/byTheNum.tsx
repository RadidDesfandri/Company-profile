import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ByTheNumber() {
    const data = [
        { img: './assetAbout/globe.jpg', text: '12 Global Offices', href: '/about' },
        { img: './assetAbout/peple.jpg', text: '7,600 Employees', href: '/about' },
        { img: './assetAbout/internet.jpg', text: '216,000 Customers', href: '/about' },
    ]
    return (
        <section className='w-full py-20 bg-stone-950'>
            <h1 className='text-3xl pb-8 text-center font-semibold text-white lg:text-4xl lg:pb-14'>Alpha By the Numbers</h1>
            <div className='max-w-7xl mx-auto flex flex-col lg:justify-center lg:flex-row items-center gap-5'>
                {data.map((item, key) => (
                    <div key={key} className='w-[370px] h-[250px] bg-slate-700 bg-opacity-25 rounded-md flex flex-col items-center p-6'>
                        <Image src={item.img} width={150} height={150} alt='globe office' className='rounded-full w-[130px] h-[130px]' />
                        <p className='font-bold text-gray-200 pt-5'>{item.text}</p>
                        <Link href={item.href} className='text-white hover:opacity-70 transition-all duration-100'>Learn more</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ByTheNumber