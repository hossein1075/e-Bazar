import React from 'react'
import BoxSlide from '../../componentsMain/BoxSlide/BoxSlide'
import useSWR from 'swr'
import { slideImgBox } from '../../../../APIimg'

const fetcher = (url) => fetch(url).then(res => res.json())
function Testimonials() {

  const {data, error, isloading} = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/clients.json', fetcher)
  const slidePerson = data ? Object.values(data) : []

  
  return (
    <>
    <section className='pb-6 middle:pb-8 xl:pb-12'>
        <div className="container">
            <div>
               <h2 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>Client’s Reviews</h2>

               <div className='flex gap-4'>
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
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials