import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function FetchingServer() {
    const user = await fetch("https://randomuser.me/api/?results=10", {
        method: "GET"
    })

    const data = await user.json()
    return (
        <section className='w-full bg-[#0C0C0C] py-28'>
            <div className='max-w-7xl mx-auto lg:px-10'>
                <h1 className='text-center text-6xl text-white font-light pb-10'>Meet the <span className='font-bold text-blue-600'>team</span></h1>

                {/* Leadership start */}
                <p className='text-center text-4xl font-bold pb-6 text-slate-200'>Leadership</p>
                <div className='flex flex-wrap justify-center gap-3 lg:gap-5'>
                    {data.results.map((item: any, key: any) => (
                        <div key={key} className='bg-slate-900 rounded-md w-48'>
                            <Image src={item.picture.large} alt='person' width={150} height={150} className='mx-auto p-2' />
                            <p className='text-lg w-40 text-center mx-auto h-14 font-semibold text-white'> {item.name.first} {item.name.last}</p>
                            <p className='text-center text-slate-200'>{item.location.country}</p>
                        </div>
                    ))}
                </div>
                {/* Leadership end */}

                {/* Creative start */}
                <p className='text-center text-4xl font-bold pb-6 text-slate-200 pt-20'>Creative</p>
                <div className='flex flex-wrap justify-center gap-3 lg:gap-5'>
                    {data.results.map((item: any, key: any) => (
                        <div key={key} className='bg-slate-900 rounded-md w-48'>
                            <Image src={item.picture.large} alt='person' width={150} height={150} className='mx-auto p-2' />
                            <p className='text-lg w-40 text-center mx-auto h-14 font-semibold text-white'> {item.name.first} {item.name.last}</p>
                            <p className='text-center text-slate-200'>{item.location.country}</p>
                        </div>
                    ))}
                </div>
                {/* Creative end */}

                {/* Development start */}
                <p className='text-center text-4xl font-bold pb-6 text-slate-200 pt-20'>Development</p>
                <div className='flex flex-wrap justify-center gap-3 lg:gap-5'>
                    {data.results.map((item: any, key: any) => (
                        <div key={key} className='bg-slate-900 rounded-md w-48'>
                            <Image src={item.picture.large} alt='person' width={150} height={150} className='mx-auto p-2' />
                            <p className='text-lg w-40 text-center mx-auto h-14 font-semibold text-white'> {item.name.first} {item.name.last}</p>
                            <p className='text-center text-slate-200'>{item.location.country}</p>
                        </div>
                    ))}
                </div>
                {/* Development end */}
            </div>
        </section>
    )
}