import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { productBox } from '../../../APIimg'
import ProductsBox from '../../main/componentsMain/ProductBox/ProductsBox'
import useSWR from 'swr'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import { HideLoading, ShowError, ShowLoading } from '../../../ToastAPI'

const fetcher = (url) => fetch(url).then(res => res.json())
function ProductDetailSlider() {
  const { data, error, isLoading } = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/category.json', fetcher)
  useEffect(() => {
          if(isLoading) {
              ShowLoading()
          } else {
              HideLoading()
          }
  
      }, [isLoading])
      useEffect(() => {
           if(error) {
              ShowError()
          }
  
      }, [error])
  const Detail = data ? Object.values(data) : []
   const sliderRef = useRef(null)
    const [widthPage, setWidthPage] = useState(window.innerWidth)
  
    useEffect(() => {
      const handleSize = () => setWidthPage(window.innerWidth)
  
      window.addEventListener('resize', handleSize)
      return () => window.removeEventListener('resize', handleSize)
    }, [])
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0)
          sliderRef.current.innerSlider?.onWindowResized?.()
        }
  
      }, 50);
  
      return  () => clearTimeout(timer) 
    }, [widthPage, data])
  
    const sliderShowTo = 
    widthPage < 768 ? 1 : widthPage < 1024 ? 2 : widthPage < 1260 ? 3 : 4

  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
       slidesToShow: sliderShowTo,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  }
  return (
    <>
      <section className='py-8 sm:py-12'>
        <div className="container">
          <div>
            <h2 className={`text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12`}>Related Products</h2>

            <div className='w-full'>
              <Slider {...settings}>
                {Detail.map((item, index) => {
                  const slideImg = productBox[index % productBox.length]
                  return (

                      <ProductsBox
                        key={index}
                        title={item.title}
                        price={item.price}
                        img={slideImg.img}

                      />
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailSlider