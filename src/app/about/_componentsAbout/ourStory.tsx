import Image from 'next/image'
import React from 'react'
import meeting from '@/app/components/images/meeting.jpg'

function Story() {
    return (
        <section className='w-full bg-[#0C0C0C] py-20'>
            <div className='max-w-7xl mx-auto px-10 flex flex-col items-center'>

                <div className='flex flex-wrap items-center gap-6 bg-slate-900'>
                    <Image 
                    src={meeting}
                    alt='meeting' 
                    className='w-[400px] h-[385px] lg:w-[450px] object-cover' />

                    <div className='p-5 w-[400px] lg:w-[450px]'>
                        <h1 className='text-white text-3xl font-semibold pb-8'>Our Story</h1>
                        <p className='text-gray-200 text-sm pb-5 '>In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded Alpha to help companies use that shift to grow better with inbound marketing.</p>
                        <p className='text-gray-200 text-sm'>Along the way, Alpha expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, Alpha uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story