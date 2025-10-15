import React from 'react'
import ProductsBox from '../../componentsMain/ProductBox/ProductsBox'
import BtnOrigin from '../../componentsMain/BtnOrigin/BtnOrigin'
import './Products.css'
import InfoBtnOrigin from '../../componentsMain/BtnOrigin/InfoBtnOrigin'
function Products() {
  return (
    <>
    <section className='pt-6 sm:pt-8 md:pt-12 pb-15 md:pb-17 lg:pb-24'>
        <div className="container">
        
               <h1 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>All Products</h1>
            <div>
                <ul className='mb-8 md:mb-12 flex justify-center flex-wrap gap-7'>
                    <li className='hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer'>All Products</li>
                    <li className='hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer'>Dairy</li>
                    <li className='hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer'>Food & Drinks</li>
                    <li className='hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer'>Fruits</li>
                    <li className='hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer'>Vegetables</li>
                </ul>
            </div>
            <div>
                <ProductsBox/>
            </div>
            <div className='text-center'>
                <BtnOrigin text={InfoBtnOrigin[3].info}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products