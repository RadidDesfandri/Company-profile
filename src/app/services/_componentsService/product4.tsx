import Image from 'next/image'
import React from 'react'
import car1 from '@/app/services/_assetsService/car1.jpeg'
import car2 from '@/app/services/_assetsService/car2.jpeg'
import car3 from '@/app/services/_assetsService/car3.jpeg'
import car4 from '@/app/services/_assetsService/car4.jpeg'
import car5 from '@/app/services/_assetsService/car5.jpeg'

function Product4() {
    return (
        <section id='produk4' className='bg-stone-950 w-full py-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap lg:items-center'>
                    <div className='w-[390px] mx-auto lg:w-[630px]'>
                        <h1 className='text-white font-semibold text-center text-2xl pb-4 lg:text-5xl lg:text-left'>Electric Cars: Environmentally Friendly Vehicles for the Future</h1>
                        <p className='text-sm text-center pb-6 lg:pb-14 lg:text-base lg:text-left'>Electric cars are innovative vehicles that use electrical energy as the main power source, replacing traditional fossil fuels such as gasoline or diesel. Designed to provide high performance while reducing environmental impact, electric cars offer a variety of benefits in terms of energy efficiency, lower emissions and advanced technology.</p>
                        <div className='lg:flex hidden gap-3'>
                            <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200'>Pre Order</button>
                            <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full'>$385.998</button>
                        </div>
                    </div>
                    <div className='mx-auto pb-[28px]'>
                        <Image src={car3} alt='hand robot 1' width={900} className='object-cover object-bottom w-[300px] lg:w-[350px] h-[470px] rounded-2xl' />
                    </div>
                </div>


                {/* Kualiatas robot start */}
                <div className='flex flex-wrap justify-center items-center lg:justify-around pb-16 lg:px-16'>
                    <div className='flex flex-wrap pb-10 '>
                        <div className='flex flex-col text-white px-6 lg:px-8 lg:pr-12 border-r-2'>
                            <span ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} fill="currentColor"><path d="M8 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5H9.625L8.45833 7H4V17H8V19ZM12.375 19L13.5417 17H18V7H14V5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H12.375ZM21 9H23V15H21V9ZM12 11H15L10 19V13H7L12 5V11Z"></path></svg></span>
                            <p className='text-3xl font-semibold py-1 lg:py-3 lg:text-4xl'>12h</p>
                            <p className='text-lg lg:text-xl'>Battery</p>
                        </div>
                        <div className='flex flex-col text-white px-6 lg:px-8 lg:pr-12 border-r-2'>
                            <span ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} fill="currentColor"><path d="M3.92887 4.92883L5.34315 6.3431C3.89543 7.79082 3 9.79082 3 12C3 14.2091 3.89543 16.2091 5.34315 17.6568L3.92887 19.0711C2.11925 17.2615 1 14.7615 1 12C1 9.23846 2.11925 6.73846 3.92887 4.92883ZM20.0711 4.92883C21.8808 6.73846 23 9.23846 23 12C23 14.7615 21.8808 17.2615 20.0711 19.0711L18.6569 17.6568C20.1046 16.2091 21 14.2091 21 12C21 9.79133 20.105 7.79174 18.6579 6.3441L20.0711 4.92883ZM13 4.99996V11H16L11 19V13H8L13 4.99996ZM6.75736 7.75732L8.17157 9.17153C7.44771 9.89539 7 10.8954 7 12C7 13.1045 7.44771 14.1045 8.17157 14.8284L6.75736 16.2426C5.67157 15.1568 5 13.6568 5 12C5 10.3431 5.67157 8.8431 6.75736 7.75732ZM17.2436 7.7583C18.3288 8.84401 19 10.3436 19 12C19 13.6568 18.3284 15.1568 17.2426 16.2426L15.8284 14.8284C16.5523 14.1045 17 13.1045 17 12C17 10.8959 16.5527 9.89631 15.8294 9.17253L17.2436 7.7583Z"></path></svg></span>
                            <p className='text-3xl font-semibold  lg:text-4xl lg:py-3 py-1'>2h</p>
                            <p className='text-lg lg:text-xl'>Charging</p>
                        </div>
                        <div className='flex flex-col text-white px-6 lg:px-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M6 8V19H18V8H15V2H17V6H22V8H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8H2V6H7V2H9V8H6ZM13 2V8H11V2H13Z"></path></svg>
                            <p className='text-3xl font-semibold lg:text-4xl lg:py-3 py-1'>xx</p>
                            <p className='text-lg lg:text-xl'>Sensory</p>
                        </div>
                    </div>

                    <div className='flex gap-6 pb-10 lg:py-0  '>
                        <div className='lg:relative'>
                            <Image src={car2} alt='hand robot 3' width={500} className='w-[170px] object-cover object-center h-[160px] rounded-xl lg:w-[270px] lg:h-[180px] ' />
                            <p className='hidden lg:flex text-white  border backdrop-blur-lg py-1 px-2 rounded-md absolute bottom-3 left-3 font-semibold'>Back View</p>
                        </div>
                        <div className='lg:relative'>
                            <Image src={car1} alt='hand robot 4' width={500} className='w-[170px] object-cover object-top h-[160px] rounded-xl lg:w-[270px] lg:h-[180px] ' />
                            <p className='hidden lg:flex text-white border backdrop-blur-lg py-1 px-2 rounded-md absolute top-3 right-3 font-semibold'>Top View</p>
                        </div>
                    </div>
                </div>
                {/* Kualitas robot end */}
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-around px-8 '>
                    <div>
                        <h1 className='text-white font-bold text-4xl text-center lg:text-left lg:text-5xl'>Electric Cars Pictures</h1>
                        <p className='text-center pb-5 lg:pb-0 lg:text-left lg:text-lg'>Some pictures of the Electric Cars</p>
                    </div>
                    <div className="carousel rounded-box w-[350px] h-[188px] lg:w-[550px] lg:h-72">
                        <div className="carousel-item w-full">
                            <Image
                                src={car4}
                                alt='handrobot2'
                                className="w-full object-cover " />
                        </div>
                        <div className="carousel-item w-full">
                            <Image
                                src={car5}
                                alt='handrobot5'
                                className="w-full object-cover " />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex gap-3 py-10 px-10'>
                    <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200'>Pre Order</button>
                    <button className=' text-white font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full'>$385.998</button>
                </div>
            </div>
        </section>
    )
}

export default Product4