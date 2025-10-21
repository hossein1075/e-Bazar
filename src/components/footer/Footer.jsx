import React from 'react'
import SectionDesc from './sectionsFooter/sectionSesc/SectionDesc'
import SectionContact from './sectionsFooter/sectionContact/SectionContact'

function Footer() {
  return (
    <>
   <footer className='pt-12 pb-8'>
     <SectionDesc/>
     <SectionContact/>
   </footer>
    </>
  )
}

export default Footer