import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import ShoppingCart from '../components/Shop/ShoppingCart/ShoppingCart'

function Shop() {
  return (
    <>
    <Header/>
    <ShopBanner/>
    <ShoppingCart/>
    <Footer/>
    </>
  )
}

export default Shop