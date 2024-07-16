import React from 'react'
import FetchContenful from './fetchContenful'


export default async function Content() {
  const get = await fetch("https://cdn.contentful.com/spaces/17pr1w17zin1/environments/master/entries?access_token=gYdjWuEnZZEKhjYoQnXbzDkzLZDDO7hQhu1AoNeQ-8Y", {
    method: 'GET'
  })
  const data = await get.json()
  
  return (
    <div>
      <FetchContenful
        tittle={data.items[0].fields.tittle}
        name={data.items[0].fields.name}
        price={data.items[0].fields.price}
        deskripsi={data.items[0].fields.deskripsi.content[0].content[0].value}
        img1={data.includes.Asset[10].fields.file.url}
        img2={data.includes.Asset[5].fields.file.url}
        img3={data.includes.Asset[8].fields.file.url}
        imgcorou1={data.includes.Asset[17].fields.file.url}
        imgcorou2={data.includes.Asset[3].fields.file.url}
        imgcorou3={data.includes.Asset[18].fields.file.url}
      />
      <FetchContenful
        tittle={data.items[1].fields.tittle}
        name={data.items[1].fields.name}
        price={data.items[1].fields.price}
        deskripsi={data.items[1].fields.deskripsi.content[0].content[0].value}
        img1={data.includes.Asset[7].fields.file.url}
        img2={data.includes.Asset[14].fields.file.url}
        img3={data.includes.Asset[2].fields.file.url}
        imgcorou1={data.includes.Asset[9].fields.file.url}
        imgcorou2={data.includes.Asset[4].fields.file.url}
        imgcorou3={data.includes.Asset[1].fields.file.url}
      />
      <FetchContenful
        tittle={data.items[2].fields.tittle}
        name={data.items[2].fields.name}
        price={data.items[2].fields.price}
        deskripsi={data.items[1].fields.deskripsi.content[0].content[0].value}
        img1={data.includes.Asset[11].fields.file.url}
        img2={data.includes.Asset[0].fields.file.url}
        img3={data.includes.Asset[6].fields.file.url}
        imgcorou1={data.includes.Asset[13].fields.file.url}
        imgcorou2={data.includes.Asset[15].fields.file.url}
        imgcorou3={data.includes.Asset[11].fields.file.url}
      />
    </div>
  )
}
