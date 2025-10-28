import React from 'react'
import ProductsBox from '../../componentsMain/ProductBox/ProductsBox'
import useSWR from 'swr'
import { featureBox } from '../../../../APIimg'
const fetcher = (url) => fetch(url).then(res => res.json())
function Feautres() {
    const {data, error, isLoading } = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/Products.json', fetcher)
    const products = data ? Object.values(data) : []
    
    return (
        <>
            <section className='pt-15 pb-6 md:pt-17.5 md:pb-8 lg:pt-24 lg:pb-12'>
                <div className="container">
                    <div>
                        <h2 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>Featured Products</h2>

                        <div className='flex gap-4 flex-wrap'>
                            {products.map((item,index) => {
                                const featureImg = featureBox[index % featureBox.length]
                                return (
                                    <ProductsBox 
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    img={featureImg.img}
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

export default Feautres