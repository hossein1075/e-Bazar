import React from 'react'
import ProductsBox from '../../componentsMain/ProductBox/ProductsBox'
function Feautres() {
    return (
        <>
            <section className='pt-15 pb-6 md:pt-17.5 md:pb-8 lg:pt-24 lg:pb-12'>
                <div className="container">
                    <div>
                        <h2 className='text-center text-5xl md:text-6xl lg:text-80px tracking-tightest text-neutral-950 font-RobotoSerif-Regular mb-8 md:mb-12'>Featured Products</h2>

                        <div>
                            <ProductsBox />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feautres