import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import MainAbout from '../components/About/MainAbout/MainAbout'
import BoxSec from '../components/About/BoxSec/BoxSec'
import Testimonials from '../components/main/sections/section6/Testimonials'
import Footer from '../components/footer/Footer'

function About() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='About Us'
    />
    <MainAbout/>
    <BoxSec/>
    <Testimonials className='text-start'/>
    <Footer/>
    </>
  )
}

export default About