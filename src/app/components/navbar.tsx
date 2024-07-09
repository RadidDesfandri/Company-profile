import Link from 'next/link'
import React from 'react'

const itemNav = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About Us' },
    { href: '/services', text: 'Services' },
    { href: '/teams', text: 'Teams' },
]

function Navbar() {
    return (
        <section className='w-full z-50  mx-auto fixed bg-[#0C0C0C]'>
            <div className='flex justify-between items-center max-w-7xl bg-transparent mx-auto h-16 px-10'>
                <div>
                    <Link href='/'>
                        <h1 className='font-extrabold text-white font-mono text-[20px] '>AI <span className='text-gray-600 tracking-[1px]'>pha</span></h1>
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='gap-9 flex '>
                        {itemNav.map((item, index) => (
                            <li key={index} className='hover:text-blue-600 text-sm transition-all duration-300 text-white'>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-6 items-center'>
                    <button className='bg-transparent border border-blue-600 px-3 py-2 text-[12px] text-white lg:text-sm  rounded-full font-bold flex items-center gap-1 hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>SHOP</button>
                    <Link href="#">
                        <button className='lg:hidden text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width='27px' viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar