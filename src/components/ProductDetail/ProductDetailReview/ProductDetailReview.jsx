import React from 'react'
import ProductDetailPerson from '../../main/componentsMain/ProductDetail/ProductDetailPerson/ProductDetailPerson'
import ProductDetailForm from '../../main/componentsMain/ProductDetail/ProductDetailReviewForm/ProductDetailForm'
import ProductDetailAccordian from '../../main/componentsMain/ProductDetail/ProductDetailAccordian/ProductDetailAccordian'
import { productDetailinfo } from '../../main/componentsMain/ProductDetail/productDetailinfo'

function ProductDetailReview() {
    return (
        <>
            <section className=''>
                <div className="container">
                    <div>
                        <div className='mb-12 flex gap-8 items-center flex-wrap'>
                            <h3 className='text-3xl sm:text-5xl middle:text-80px'>Reviews(36)</h3>
                            <span className='font-RobotoSerif-Regular leading-[120%] sm:text-3xl md:text-4x-l-5 lg:text-6xl tracking-tightest text-neutral-600'>Product Detail</span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                            <div className='basis-[70%]'>
                                {productDetailinfo.map(item => (

                                <ProductDetailPerson 
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                desc={item.desc}
                                />
                                ))}
                               
                                <ProductDetailAccordian />
                            </div>
                            <div className='basis-[30%] w-full sm:w-auto mx-auto mt-5 lg:mt-0'>
                                <ProductDetailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailReview