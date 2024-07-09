import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <section className='bg-slate-900 md:bg-[#0C0C0C] w-full pt-32'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col mx-auto'>
                    <h1 className='text-white text-center font-serif text-3xl md:text-4xl'>Come Talk With Us</h1>
                    <div className='text-gray-300 text-center text-[10px] font-serif pt-14 md:flex md:justify-between md:px-20 md:text-sm'>
                        <div className='flex flex-col items-center pb-16' >
                            <p className='pb-3'>STAY UP TO DATE <span className='block'>WITH OUR NEW SLETTER</span></p>
                            <div className='flex justify-center items-center rounded-full border w-10 h-10 '>
                                <Link className='' href=""><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-center pb-16'>
                            <p className='pb-3'>CONTACT OUR GENERAL MANAGER</p>
                            <button className='border px-3 py-2 rounded-sm'>VALERIE VAN DELFT</button>
                        </div>
                        <div className='flex flex-col items-center  pb-16'>
                            <p className='pb-3'>AGENCY PRESENTATION</p>
                            <div className='flex justify-center items-center rounded-full border w-10 h-10 '>
                                <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13 12V8H11V12H8L12 16L16 12H13Z"></path></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full  bg-gray-800  py-5 md:bg-[#131313]'>
                <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around md:gap-5 md:px-10 items-center text-gray-300 text-sm font-semibold'>
                    <Link href='#' className='hidden md:flex'>CONTACT US</Link>
                    <Link href='#' className=''>NEWSLETTER</Link>
                    <Link href='#' className='hidden md:flex'>PODCAST</Link>
                    <Link href='#' className='hidden md:flex'>1 SITE PAR JOUR</Link>
                    <Link href='#' className='hidden md:flex'>AGENCY PRESENTATION</Link>
                    <Link href='#' className='md:hidden'>AGENCY PRES.</Link>
                </div>
            </div>

        </section>
    )
}

export default Footer