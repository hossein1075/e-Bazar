import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import ProductDetailReview from '../components/ProductDetail/ProductDetailReview/ProductDetailReview'

function ProductDetail() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='Product Detail'
    />
    <ProductDetailReview/>
    </>
  )
}

export default ProductDetail