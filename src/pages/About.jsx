import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import MainAbout from '../components/About/MainAbout/MainAbout'

function About() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='About Us'
    />
    <MainAbout/>
    </>
  )
}

export default About