import React from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BtnOrigin from '../components/main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../components/main/componentsMain/BtnOrigin/InfoBtnOrigin'

function ProductPage() {
    return (
        <>
            <Header />
            <ShopBanner
                title='Product Detail'
            />
            <section className=''>
                <div className="container">
                    <div>
                        <div>
                            <img src="/images/Products/p-4.png" alt="product img" />
                        </div>
                        <div>
                            <div>
                                <h5>Pea Pickle Jar</h5>
                                <span>$88</span>
                            </div>
                            <p>
                                The Brogue features a distinctive perforated design on
                                the upper, known as broguing, which adds a touch of
                                refinement and chara-ter to the wearer of the shoepair.
                            </p>
                            <h6>
                                Category: <span>Food & Drinks</span>
                            </h6>
                            <h6>
                                SKU: <span>12 323 43</span>
                            </h6>
                            <h6>
                                Quantity: <span>/500g</span>
                            </h6>
                            <div>
                                {/* count */}
                            </div>
                            <div>
                                <BtnOrigin text={InfoBtnOrigin[2].info}/>
                                <BtnOrigin text={InfoBtnOrigin[11].info}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPage