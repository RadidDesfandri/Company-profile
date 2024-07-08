import Image from 'next/image'
import React from 'react'

function Management() {
    return (
        <section className='w-full pt-24 md:pt-28 max-w-8xl bg-gray-900 lg:bg-[#0C0C0C] relative'>
            <div className='absolute w-40 h-40 lg:w-40 lg:h-40 bg-blue-600  rounded-full blur-[90px] opacity-80 lg:left-64 lg:top-16 lg:opacity-60 animate-pulse'></div>
            <div className='max-w-6xl flex mx-auto flex-col items-center justify-center'>
                <p className='text-gray-400 mb-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={120} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                </p>
                <h1 className='text-4xl text-center text-white font-bold w-[380px] mb-10 md:text-5xl md:w-[700px] '>Doing business responsibly and sustainably</h1>
                <p className='text-center text-gray-200 text-sm md:text-base w-[390px] md:w-[530px] mb-24'>As a responsible company, we operate sustainably, to high Environmental, Social and Governance (ESG) standards. We continue to embed sustainability ever deeper in the way we do business – in our own operations and beyond, together with our partners.</p>
            </div>
        </section>
    )
}

export default Management