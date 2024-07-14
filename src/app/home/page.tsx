import React from 'react'
import Hero from './_componentsHome/hero'
import Robot from './_componentsHome/robot'
import Management from './_componentsHome/management'
import Ceo from './_componentsHome/ceo'
import Client from './_componentsHome/client'
import { EmblaOptionsType } from 'embla-carousel'
import Testimoni from './_componentsHome/testimoni'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function HomePage() {
  return (
    <section>
      <Hero />
      <Robot />
      <Management />
      <Ceo />
      <Testimoni />
      <Client />
    </section>
  )
}

export default HomePage