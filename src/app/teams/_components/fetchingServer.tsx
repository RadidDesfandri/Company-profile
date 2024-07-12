import Image from 'next/image'
import React from 'react'

export default async function FetchingServer() {
    const user = await fetch("https://randomuser.me/api/?results=10", {
        method: "GET"
    })

    const data = await user.json()
    return (
        <section>
            <div>
                {data.results.map((item: any, key: any) => (
                    <div key={key}>
                        <Image src={item.picture.large} alt='person' width={50} height={50}/>
                        <p>{item.email}</p>
                    </div>
            ))}
            </div>
        </section>
    )
}

