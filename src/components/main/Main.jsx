import React from 'react'
import Banner from './sections/section1/Banner'
import Category from './sections/section2/Category'
import Products from './sections/section3/Products'
import BannerOff from './sections/section4/BannerOff'
function Main() {
  return (
    <>
    <main className='pt-20 mt-20 lg:mt-25'>
      <Banner/>
      <Category/>
      <Products/>
      <BannerOff/>
    </main>
    </>
  )
}

export default Main