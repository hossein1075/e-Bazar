import React from 'react'
import Banner from './sections/section1/Banner'
import Category from './sections/section2/Category'
import Products from './sections/section3/Products'
function Main() {
  return (
    <>
    <main className='pt-20 mt-20 lg:mt-25'>
      <Banner/>
      <Category/>
      <Products/>
    </main>
    </>
  )
}

export default Main