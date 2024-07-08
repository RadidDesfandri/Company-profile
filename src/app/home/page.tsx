import React from 'react'
import Hero from './_componentsHome/hero'
import Robot from './_componentsHome/robot'
import Management from './_componentsHome/management'
import Ceo from './_componentsHome/ceo'
import Client from './_componentsHome/client'

function HomePage() {
  return (
    <section>
        <Hero/>
        <Robot/>    
        <Management/>
        <Ceo/>
        <Client/>
    </section>
  )
}

export default HomePage