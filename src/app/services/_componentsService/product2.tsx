import React from 'react'
import robotmini1 from '@/app/services/_assetsService/robotmini1.jpg'
import robotmini2 from '@/app/services/_assetsService/robotmini2.jpg'
import robotmini3 from '@/app/services/_assetsService/robotmini3.jpg'
import robotmini4 from '@/app/services/_assetsService/robotmini4.jpg'
import robotmini5 from '@/app/services/_assetsService/robotmini5.jpg'
import robotmini6 from '@/app/services/_assetsService/robotmini6.jpg'
import Image from 'next/image'

function Product2() {
    return (
        <section id='produk2' className='bg-[#0C0C0C] w-full pt-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap lg:items-center'>
                    <div className='w-[390px] mx-auto lg:w-[630px]'>
                        <h1 className='text-white font-semibold text-center text-2xl pb-4 lg:text-5xl lg:text-left'>NanoMind: Mini AI Robot with Maximum Capabilities</h1>
                        <p className='text-sm text-center pb-6 lg:pb-14 lg:text-base lg:text-left'>NanoMind is an AI robot that is small in size but has extraordinary abilities. Despite being compact, NanoMind is equipped with advanced features that make it capable of handling various tasks with high efficiency.</p>
                        <div className='lg:flex hidden gap-3'>
                            <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200'>Pre Order</button>
                            <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full'>$214.000</button>
                        </div>
                    </div>
                    <div className='mx-auto pb-[28px]'>
                        <Image src={robotmini1} alt='gambar 1 robot mini' width={900} className='object-cover object-bottom w-[300px] lg:w-[350px] h-[470px] rounded-2xl hover:scale-105 transition-all duration-500' />
                    </div>
                </div>


                {/* Kualiatas robot start */}
                <div className='flex flex-wrap justify-center items-center lg:justify-around pb-16 lg:px-8'>
                    <div className='flex flex-wrap pb-10 '>
                        <div className='flex flex-col text-white px-8 lg:pr-12 border-r-2'>
                            <span ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} fill="currentColor"><path d="M8 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5H9.625L8.45833 7H4V17H8V19ZM12.375 19L13.5417 17H18V7H14V5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H12.375ZM21 9H23V15H21V9ZM12 11H15L10 19V13H7L12 5V11Z"></path></svg></span>
                            <p className='text-3xl font-semibold py-1 lg:py-3 lg:text-4xl'>12h</p>
                            <p className='text-lg lg:text-xl'>Battery</p>
                        </div>
                        <div className='flex flex-col text-white px-8 lg:pr-12 border-r-2'>
                            <span ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} fill="currentColor"><path d="M3.92887 4.92883L5.34315 6.3431C3.89543 7.79082 3 9.79082 3 12C3 14.2091 3.89543 16.2091 5.34315 17.6568L3.92887 19.0711C2.11925 17.2615 1 14.7615 1 12C1 9.23846 2.11925 6.73846 3.92887 4.92883ZM20.0711 4.92883C21.8808 6.73846 23 9.23846 23 12C23 14.7615 21.8808 17.2615 20.0711 19.0711L18.6569 17.6568C20.1046 16.2091 21 14.2091 21 12C21 9.79133 20.105 7.79174 18.6579 6.3441L20.0711 4.92883ZM13 4.99996V11H16L11 19V13H8L13 4.99996ZM6.75736 7.75732L8.17157 9.17153C7.44771 9.89539 7 10.8954 7 12C7 13.1045 7.44771 14.1045 8.17157 14.8284L6.75736 16.2426C5.67157 15.1568 5 13.6568 5 12C5 10.3431 5.67157 8.8431 6.75736 7.75732ZM17.2436 7.7583C18.3288 8.84401 19 10.3436 19 12C19 13.6568 18.3284 15.1568 17.2426 16.2426L15.8284 14.8284C16.5523 14.1045 17 13.1045 17 12C17 10.8959 16.5527 9.89631 15.8294 9.17253L17.2436 7.7583Z"></path></svg></span>
                            <p className='text-3xl font-semibold  lg:text-4xl lg:py-3 py-1'>1h</p>
                            <p className='text-lg lg:text-xl'>Charging</p>
                        </div>
                        <div className='flex flex-col text-white px-8'>
                            <span ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} fill="currentColor"><path d="M6.60282 10.0001L10 7.22056V16.7796L6.60282 14.0001H3V10.0001H6.60282ZM2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg></span>
                            <p className='text-3xl font-semibold lg:text-4xl lg:py-3 py-1'>1m</p>
                            <p className='text-lg lg:text-xl'>Diff sound</p>
                        </div>
                    </div>

                    <div className='flex gap-6 pb-10 lg:py-0  '>
                        <div className='relative hover:scale-105 transition-all duration-500'>
                            <Image src={robotmini2} alt='' width={500} className='w-[170px] object-cover object-center h-[160px] rounded-xl lg:w-[270px] lg:h-[180px] ' />
                            <p className='border backdrop-blur-lg py-1 px-2 rounded-md absolute top-3 left-3 font-semibold'>Foot View</p>
                        </div>
                        <div className='relative hover:scale-105 transition-all duration-500'>
                            <Image src={robotmini3} alt='' width={500} className='w-[170px] object-cover object-top h-[160px] rounded-xl lg:w-[270px] lg:h-[180px] ' />
                            <p className='border backdrop-blur-lg py-1 px-2 rounded-md absolute bottom-3 right-3 font-semibold'>Hand View</p>
                        </div>
                    </div>
                </div>
                {/* Kualitas robot end */}
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-around '>
                    <div>
                        <h1 className='text-white font-bold text-4xl text-center lg:text-left lg:text-5xl'>NanoMind Pictures</h1>
                        <p className='text-center pb-5 lg:pb-0 lg:text-left lg:text-lg'>Some pictures of the NanoMind Robot</p>
                    </div>
                    <div className="carousel rounded-box w-[350px] h-[188px] lg:w-[550px] lg:h-72">
                        <div className="carousel-item w-full">
                            <Image
                                src={robotmini6}
                                alt=''
                                className="w-full object-cover object-top" />
                        </div>
                        <div className="carousel-item w-full">
                            <Image
                                src={robotmini4}
                                alt=''
                                className="w-full object-cover object-top" />
                        </div>
                        <div className="carousel-item w-full">
                            <Image
                                src={robotmini5}
                                alt=''
                                className="w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex gap-3 py-10 px-20'>
                    <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200'>Pre Order</button>
                    <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full'>$214.000</button>
                </div>
            </div>
        </section>
    )
}

export default Product2