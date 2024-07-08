import React from 'react'
import tailwind from '../components/images/tailwind.svg'
import microsoft from '../components/images/microsoft.svg'
import google from '../components/images/google.svg'
import github from '../components/images/github.svg'
import discord from '../components/images/discord.svg'
import chatgpt from '../components/images/chatgpt.svg'
import ansible from '../components/images/ansible.svg'
import algolia from '../components/images/algolia.svg'
import akamai from '../components/images/akamai.svg'
import Image from 'next/image'

const itemClient = [
  { gambar: {tailwind} }
]

function Client() {
  return (
    <section id='client' className='bg-gray-900 lg:bg-[#0C0C0C] h-80 flex  flex-col justify-center'>
      <div className='text-center text-white text-xl lg:text-2xl font-semibold'>
        <p className='lg:text-base text-sm text-blue-500'>Client</p>
        <h1>Has collaborated with several companies</h1>
        <h2 className='font-normal text-gray-400 text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sint natus sequi reiciendis, odit fugit quos. Iste?</h2>
      </div>

      <div className='space-x-24 flex overflow-hidden mt-11'>
        <div className='flex space-x-16 animate-infinite_scroll'>
          <Image src={tailwind} alt='tailwind' className='grayscale'/>
          <Image src={microsoft} alt='tailwind'  className='grayscale'/>
          <Image src={google} alt='tailwind'  className='grayscale'/>
          <Image src={github} alt='tailwind'  className='grayscale'/>
          <Image src={discord} alt='tailwind'  className='grayscale'/>
          <Image src={chatgpt} alt='tailwind'  className='grayscale scale-0'/>
          <Image src={ansible} alt='tailwind' className='scale-0 grayscale'/>
        </div>
        <div className='flex space-x-16 animate-infinite_scroll'>
          <Image src={tailwind} alt='tailwind' className='scale-0 lg:scale-100 grayscale'/>
          <Image src={microsoft} alt='tailwind'  className='grayscale'/>
          <Image src={google} alt='tailwind'  className='grayscale'/>
          <Image src={github} alt='tailwind'  className='grayscale'/>
          <Image src={discord} alt='tailwind'  className='grayscale'/>
          <Image src={chatgpt} alt='tailwind'  className='grayscale'/>
          <Image src={ansible} alt='tailwind'  className='grayscale'/>
        </div>
      </div>

    </section>
  )
}

export default Client