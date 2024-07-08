import Image from 'next/image'
import React from 'react'
import robot1 from '../components/images/robot1.jpeg'
import robot2 from '../components/images/robot2.jpeg'


function AboutUs() {
    return (
        <section id='about' className='w-full max-w-8xl bg-[#0C0C0C] lg:bg-stone-950 py-20 lg:pb-0'>
            <div className=' max-w-6xl mx-auto'>
                <div className='flex flex-wrap justify-between px-10'>
                    <div className='h-[606px] lg:w-1/2 mb-10'>
                        <h3 className='text-sm text-gray-200'>Robotic Process Automation</h3>
                        <h2 className='text-2xl font-medium mb-6 text-white'>Can robots replace HR?</h2>
                        <h1 className='mb-10 lg:mb-14 font-bold text-[#F5F7F8]'>Automation and artificial intelligence are hot topics these daysThis transformation has broad impacts</h1>
                        <p className='mb-20 text-gray-200 lg:mb-24'>The future is fast approaching, and a new era of digital innovation and disruption is here. Or, more accurately, according to Josh Bersin, “The future of work is already here.” So yes, the robots are coming. These robots aren’t physical machines; they’re software “bots” installed on desktop computers or in the cloud that can be configured to automate increasingly complex tasks, such as moving, manipulating, and validating data.</p>
                        <button className='bg-transparent border border-blue-600 font-semibold px-3 py-2 text-white rounded-lg hover:shadow-[0_1px_10px_blue]'>Read more</button>
                    </div>
                    <div>
                        <Image
                        src={robot1}
                        width={450}
                        alt='robot1'
                        className='mb-8'
                        />
                        <Image
                        src={robot2}
                        width={450}
                        alt='robot2'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs