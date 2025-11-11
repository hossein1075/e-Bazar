import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { productBox } from '../../../APIimg'
import ProductsBox from '../../main/componentsMain/ProductBox/ProductsBox'
import useSWR from 'swr'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const fetcher = (url) => fetch(url).then(res => res.json())
function ProductDetailSlider() {
    const {data, error, isloading} = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/category.json', fetcher)
    const Detail = data ? Object.values(data) : []
    console.log(Detail);
    

    const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }
  return (
    <>
    <section>
        <div className="container">
            <div>
            <h2 className={`text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12`}>Related Products</h2>

            <Slider {...settings}>
                {Detail.map((item, index) => {
                    const slideImg = productBox[index % productBox.length]
                    return (
                        <>
                     <ProductsBox 
                     key={index}
                     title={item.title}
                     price={item.price}
                     img={slideImg.img}
                     />
                    </>
                    )
                })}
            </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailSlider