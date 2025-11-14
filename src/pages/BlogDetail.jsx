import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BlogDetailImg from '../BlogDetail/BlogDetailimg/BlogDetailImg'
function BlogDetail() {
  return (
    <>
    <Header/>
    <ShopBanner 
    title='Blog Detail'
    />
    <BlogDetailImg/>
    <Footer/>
    </>
  )
}

export default BlogDetail