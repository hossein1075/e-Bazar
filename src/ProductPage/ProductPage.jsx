import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'

function ProductPage() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='Product Detail'
    />
    <section className=''>
        <div className="container">
            <div></div>
        </div>
    </section>
    </>
  )
}

export default ProductPage