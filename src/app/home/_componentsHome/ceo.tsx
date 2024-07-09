import Image from 'next/image'
import React from 'react'
import person1 from '@/app/components/images/person11.jpg'
import person2 from '@/app/components/images/person2.jpg'
import person3 from '@/app/components/images/person3.jpg'
import Link from 'next/link'

function Ceo() {
    return (
        <section className='w-full md:bg-stone-950 md:py-20 pt-16 bg-[#0C0C0C]'>
            {/* Person1 start */}
            <h1 className='text-center text-white text-3xl font-bold md:text-5xl'>A diverse and inclusive workplace</h1>
            <p className='text-center  text-gray-200 text-sm w-screen md:text-base md:w-[500px]  mx-auto mb-10'>The continued success of our company depends on every employee feeling valued, respected, and empowered to contribute fully.</p>

            <div className='flex flex-wrap lg:max-w-[1100px]  gap-4 mb-28 xl:gap-20 rounded-md md:rounded-none bg-slate-900 mx-auto'>
                <div>
                    <Image
                        src={person1}
                        alt='presentasion'
                        width={900}
                        className='mb-10 md:mb-0 w-screen lg:w-[550px] md:h-[600px] object-cover'
                    />
                </div>
                <div className='w-[400px] lg:w-[350px] flex flex-col justify-center'>
                    <p className='text-gray-200 mb-8 px-4 text-sm md:text-base'>We are a diverse team made up of some 69,700 individuals across over 100 countries, all with different backgrounds, perspectives and experiences.
                    </p>
                    <p className='text-gray-200 mb-8 px-4 text-sm  md:text-base '>We value these differences – they’re what make creativity and innovation flourish.</p>
                    <p className='text-gray-200 mb-16 px-4 text-sm  md:text-base '>We want Alpha to be the best place to work for people who share our passion.</p>
                    <Link href='#' className='px-4 flex gap-2 items-center  text-blue-600 font-bold mb-20  md:mb-0'>Join Our Team <span className=''><svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 24 24" fill="currentColor"><path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z"></path></svg></span></Link>
                </div>
            </div>
            {/* Person 2 start */}
            <div className='flex flex-wrap lg:max-w-[1100px]  gap-4 mb-28 xl:gap-20 rounded-md md:rounded-none bg-slate-900 mx-auto lg:relative'>
                <div className='flex lg:justify-end lg:w-[1100px]'>
                    <Image
                        src={person2}
                        alt='presentasion'
                        width={900}
                        className='mb-10 md:mb-0 w-screen lg:w-[550px] md:h-[600px] object-cover'
                    />
                </div>
                <div className='lg:absolute lg:left-11 lg:top-32'>
                    <div className='w-[400px] lg:w-[350px] flex flex-col justify-center'>
                        <p className='text-gray-200 mb-8 px-4 text-3xl font-bold md:text-4xl'>Executive Committee</p>
                        <p className='text-gray-200 mb-8 px-4 text-sm  md:text-base '>The Executive Committee operates under the chairmanship of the Chief Executive Officer and supports the Board of Management in the deployment of Alpha strategy and policies, and the achievement of its objectives and results.</p>
                        <p className='text-gray-200 mb-16 px-4 text-sm  md:text-base '></p>
                        <Link href='#' className='px-4 flex gap-2 items-center  text-blue-600 font-bold mb-20  md:mb-0'>Join Our Team <span className=''><svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 24 24" fill="currentColor"><path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z"></path></svg></span></Link>
                    </div>
                </div>
            </div>
            {/* Person 2 end */}

            {/* Person 3 start */}
            <div className='flex flex-wrap lg:max-w-[1100px]  gap-4 xl:gap-20 rounded-md md:rounded-none bg-slate-900 mx-auto'>
                <div>
                    <Image
                        src={person3}
                        alt='presentasion'
                        width={900}
                        className='mb-10 md:mb-0 w-screen lg:w-[550px] md:h-[600px] object-cover'
                    />
                </div>
                <div className='w-[400px] lg:w-[350px] flex flex-col justify-center'>
                    <p className='text-gray-200 mb-8 px-4 text-3xl font-bold md:text-4xl'>Supervisory Board</p>
                    <p className='text-gray-200 mb-8 px-4 text-sm  md:text-base '>As a separate and independent body, the Supervisory Board supervises the policies of the executive management and the general course of affairs of Alpha and advises the executive management.</p>
                    <p className='text-gray-200 mb-16 px-4 text-sm  md:text-base '></p>
                    <Link href='#' className='px-4 flex gap-2 items-center  text-blue-600 font-bold mb-20  md:mb-0'>Join Our Team <span className=''><svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 24 24" fill="currentColor"><path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z"></path></svg></span></Link>
                </div>
            </div>
            {/* Person 3 end */}
        </section>
    )
}

export default Ceo