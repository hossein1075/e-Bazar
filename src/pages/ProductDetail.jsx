import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import ProductDetailReview from '../components/ProductDetail/ProductDetailReview/ProductDetailReview'
import ProductDetailSlider from '../components/ProductDetail/productDetailSlider/productDetailSlider'
import Footer from '../components/footer/Footer'

function ProductDetail() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='Product Detail'
    />
    <ProductDetailReview/>
   <ProductDetailSlider/>
   <Footer/>
    </>
  )
}

export default ProductDetail