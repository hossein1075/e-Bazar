import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BlogListSec from '../blogList/BlogListSec'
function BlogList() {
  return (
    <>
    <Header/>
    <ShopBanner
    title='Blogs'
    />
    <BlogListSec/>
    <Footer/>
    </>
  )
}

export default BlogList