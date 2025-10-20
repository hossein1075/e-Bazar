import React from 'react'
import BoxSlide from '../../componentsMain/BoxSlide/BoxSlide'
function Testimonials() {
  return (
    <>
    <section className='pb-6 middle:pb-8 xl:pb-12'>
        <div className="container">
            <div>
               <h2 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>Client’s Reviews</h2>

               <div className='flex gap-4'>
                <BoxSlide/>
                <BoxSlide/>
                <BoxSlide/>
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials