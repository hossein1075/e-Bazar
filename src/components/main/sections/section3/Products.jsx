import React, { useState } from 'react'
import ProductsBox from '../../componentsMain/ProductBox/ProductsBox'
import BtnOrigin from '../../componentsMain/BtnOrigin/BtnOrigin'
import './Products.css'
import InfoBtnOrigin from '../../componentsMain/BtnOrigin/InfoBtnOrigin'
import useSWR from 'swr';
import { productBox } from '../../../../APIimg'

const fetcher = (url) => fetch(url).then(res => res.json())
function Products() {
    // state category
    const [allProducts, setAllProducts] = useState('All')

    // API
    const { data, error, isLoading } = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/category.json', fetcher)

    // convert data to Array
    const products = data ? Object.values(data) : []
    const allCategories = ['All', ...new Set(products.map(menu => menu.category))]
    console.log(allCategories);

    // filter products
    const filteredCategory = allProducts === 'All' ? products : products.filter(item => item.category === allProducts)
    
    return (
        <>
            <section className='pt-6 sm:pt-8 md:pt-12 pb-15 md:pb-17 lg:pb-24'>
                <div className="container">

                    <h2 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>All Products</h2>
                    <div>
                        <ul className='mb-8 md:mb-12 flex justify-center flex-wrap gap-7'>
                            {allCategories.map(categoty => (
                            <li className={`hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px cursor-pointer 
                                ${allProducts === categoty ? 'text-orange-600' : ''}
                                `}
                            onClick={() => setAllProducts(categoty)}
                            >{categoty}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex gap-4 flex-wrap'>
                        {filteredCategory.map((item, index) => {
                            const imgProduct = productBox[index % productBox.length]
                            return (
                                <ProductsBox
                                    img={imgProduct.img}
                                    title={item.title}
                                    price={item.price}
                                />
                            )
                        })}
                    </div>
                    <div className='text-center'>
                        <BtnOrigin text={InfoBtnOrigin[3].info} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products