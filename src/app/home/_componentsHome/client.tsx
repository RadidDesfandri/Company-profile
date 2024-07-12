import React from 'react'
import tailwind from '@/app/components/images/tailwind.svg'
import microsoft from '@/app/components/images/microsoft.svg'
import google from '@/app/components/images/google.svg'
import github from '@/app/components/images/github.svg'
import discord from '@/app/components/images/discord.svg'
import chatgpt from '@/app/components/images/akamai.svg'
import ansible from '@/app/components/images/ansible.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function Client() {
  return (
    <section className='w-full mx-auto lg:bg-gray-900 h-80 flex flex-col justify-center'>

      <div className='text-center text-white text-xl lg:text-2xl font-semibold'>
        <h1>Has collaborated with several companies</h1>
        <h2 className='font-normal text-gray-400 text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sint natus sequi reiciendis, odit fugit quos. Iste?</h2>
      </div>

      <div className='mt-8 -z-10 lg:z-0'>
        <Marquee autoFill speed={25} pauseOnHover>
          <Image src={tailwind} alt='tailwind' width={70} className='grayscale mx-10 ' />
          <Image src={microsoft} alt='tailwind' width={70} className='grayscale mx-10' />
          <Image src={google} alt='tailwind' width={70} className='grayscale mx-10 ' />
          <Image src={github} alt='tailwind' width={70} className='grayscale mx-10 ' />
          <Image src={discord} alt='tailwind' width={70} className='grayscale mx-10' />
          <Image src={chatgpt} alt='tailwind' width={70} className='grayscale mx-10' />
          <Image src={ansible} alt='tailwind' width={70} className='grayscale mx-10' />
        </Marquee>
      </div>

    </section>
  )
}

export default Client