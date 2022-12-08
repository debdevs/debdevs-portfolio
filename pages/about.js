import React from 'react'
import AboutHero from '../components/UI/templates/AboutHero/AboutHero'
import AboutSubheading from '../components/UI/templates/AboutSubheading/AboutSubheading'
import AlternateAboutHero from '../components/UI/templates/AlternateAboutHero/AlternateAboutHero'
import NavBar from '../components/UI/templates/NavBar/NavBar'
const about = () => {
  return (
    <div>
 
      <NavBar/>
      <AlternateAboutHero/>

      
      <AboutSubheading/>
    </div>
  )
}

export default about