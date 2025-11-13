import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import CheckOutFormSec from '../components/CheckOut/CheckOutForm/CheckOutFormSec'
function CheckOut() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='Checkout'
    />
    <CheckOutFormSec/>
    <Footer/>
    </>
  )
}

export default CheckOut