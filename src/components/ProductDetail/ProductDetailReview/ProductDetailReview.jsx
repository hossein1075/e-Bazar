import React from 'react'
import ProductDetailPerson from '../../main/componentsMain/ProductDetail/ProductDetailPerson/ProductDetailPerson'
import ProductDetailForm from '../../main/componentsMain/ProductDetail/ProductDetailReviewForm/ProductDetailForm'

function ProductDetailReview() {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <div className='mb-12 flex gap-8 items-center flex-wrap'>
                    <h3 className='text-3xl sm:text-5xl middle:text-80px'>Reviews(36)</h3>
                    <span className='font-RobotoSerif-Regular leading-[120%] sm:text-3xl md:text-4x-l-5 lg:text-6xl tracking-tightest text-neutral-600'>Product Detail</span>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='basis-[70%]'>

                    <ProductDetailPerson/>
                    <ProductDetailPerson/>
                    <ProductDetailPerson/>
                    </div>
                    <div className='basis-[30%] w-full sm:w-auto mx-auto'>

                    <ProductDetailForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailReview