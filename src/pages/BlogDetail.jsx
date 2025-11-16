import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BlogDetailImg from '../BlogDetail/BlogDetailimg/BlogDetailImg'
import BlogDetailComments from '../BlogDetail/BlogDetailComments/BlogDetailComments'
import BlogDetailPost from '../BlogDetail/BlogDetailPost/BlogDetailPost'
function BlogDetail() {
  return (
    <>
    <Header/>
    <ShopBanner 
    title='Blog Detail'
    />
    <BlogDetailImg/>
    <BlogDetailComments/>
    <BlogDetailPost/>
    <Footer/>
    </>
  )
}

export default BlogDetail