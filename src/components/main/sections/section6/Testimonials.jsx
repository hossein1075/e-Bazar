import React from 'react'
import BoxSlide from '../../componentsMain/BoxSlide/BoxSlide'
import useSWR from 'swr'
import { slideImgBox } from '../../../../APIimg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const fetcher = (url) => fetch(url).then(res => res.json())
function Testimonials({className}) {

  const { data, error, isloading } = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/clients.json', fetcher)
  const slidePerson = data ? Object.values(data) : []

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <>
      <section className='pb-6 middle:pb-8 xl:pb-12'>
        <div className="container">
          <div>
            <h2 className={`text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12 ${className}`}>Client’s Reviews</h2>
              <Slider {...settings}>
              {slidePerson.map((item, index) => {
                const slideImg = slideImgBox[index % slideImgBox.length]
                return (
                  <BoxSlide
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    img={slideImg.img}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials