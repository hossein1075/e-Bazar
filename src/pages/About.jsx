import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import MainAbout from '../components/About/MainAbout/MainAbout'
import BoxSec from '../components/About/BoxSec/BoxSec'

function About() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='About Us'
    />
    <MainAbout/>
    <BoxSec/>
    </>
  )
}

export default About