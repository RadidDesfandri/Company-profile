import React from 'react'
import Intro from './_componentsAbout/intro'
import Inofation from './_componentsAbout/innofation'
import Story from './_componentsAbout/ourStory'
import ByTheNumber from './_componentsAbout/byTheNum'
import TimeLine from './_componentsAbout/timeline'

function AboutUs() {
  return (
    <div>
        <Intro/>
        <Inofation/>
        <Story/>
        <TimeLine/>
        <ByTheNumber/>
    </div>
  )
}

export default AboutUs