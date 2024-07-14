"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Teams() {
    const [teams, setTeams] = useState<any[]>([])

    useEffect(() => {
        const team = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=10')
                const json = await response.json()
                setTeams(json.results)
            } catch (err) {
                console.log(err);
            }
        }
        team()
    }, [])


    return (
        <section className='pt-20 w-full'>
            <p className='text-center text-5xl'>DAFTAR ORANG HILANG</p>
            <div className='flex flex-wrap justify-center gap-5 max-w-7xl mx-auto'>
                {
                    teams.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Image src={item.picture.large} alt='' width={300} height={300} className='rounded-md' />
                                <p>{item.name.last}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Teams