import React from 'react'

function Inofation() {
    return (
        <section className='w-full py-20 bg-stone-950'>
            <div className='max-w-7xl mx-auto flex flex-col'>
                <h1 className='text-white text-3xl mx-auto text-center w-[350px] font-semibold pb-5 lg:text-5xl lg:w-[700px]'>Innovating to Address global health challenges</h1>
                <p className='text-gray-200 text-center mx-auto w-[350px] pb-16 lg:w-[800px] lg:pb-24'>We have a proud heritage of ground-breaking innovation that stretches back over 130 years.
                    Meaningful innovation – focused on our customers’ needs – remains at the heart of everything we do.</p>

                <div className='flex flex-wrap justify-center mx-auto gap-3.5  lg:gap-5 pb-20'>
                    <div className=' w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2  rounded-lg text-white'>
                        <h1 className='text-4xl pb-2 font-bold'>~9%of sales</h1>
                        <p className='text-xl font-semibold'>invested in R&D in 2023</p>
                    </div>
                    <div className=' w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white'>
                        <h1 className='text-4xl pb-2 font-bold'>~50% </h1>
                        <p className='text-xl font-semibold'>software/data science  focus in R&D</p>
                    </div>
                    <div className=' w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white'>
                        <h1 className='text-4xl pb-2 font-bold '>53,000 </h1>
                        <p className='text-xl lg:text-2xl font-semibold'>patent rights</p>
                    </div>
                    <div className=' w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white'>
                        <h1 className='text-4xl lg:text-5xl pb-2 font-bold'>#1 <span className='text-2xl lg:text-3xl'>company</span> </h1>
                        <p className='lg:text-xl text-base font-semibold'>for MedTech patent filings with European Patent Office in 2023</p>
                    </div>
                    <div className=' w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-slate-700 bg-opacity-25 p-2 rounded-lg text-white'>
                        <h1 className='lg:text-3xl text-lg pb-2 font-bold'>Clarivate Top 100 Global Innovator  </h1>
                        <p className='lg:text-xl text-base font-semibold'>11th year in a row</p>
                    </div>
                </div>

                <p className='text-gray-200 text-center mx-auto w-[350px] pb-16 lg:w-[800px] lg:pb-24'>But in a fast-paced industry like ours, we can rarely innovate alone. This means partnering with healthcare providers, start-ups, universities (especially university hospitals) and other companies.</p>
            </div>
        </section>
    )
}

export default Inofation