import React from 'react'
import AboutHero from '../components/UI/templates/AboutHero/AboutHero'
import AboutSubheading from '../components/UI/templates/AboutSubheading/AboutSubheading'
import NavBar from '../components/UI/templates/NavBar/NavBar'
const about = () => {
  return (
    <div>
      <NavBar/>
      <AboutHero/>
      <AboutSubheading/>
    </div>
  )
}

export default about