import React, { useContext } from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BtnOrigin from '../components/main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../components/main/componentsMain/BtnOrigin/InfoBtnOrigin'
import { useLocation, useParams } from 'react-router-dom'
import { ProductsContext } from '../Contexts/ProductsContext'

function ProductPage() {

    let { productID } = useParams()
    let contextData = useContext(ProductsContext)
    console.log(contextData.allProducts);
    let location = useLocation()

    let mainProduct = location.state?.product


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
                            <img src={mainProduct.img} alt="product img" />
                        </div>
                        <div>
                            <div>
                                <h5>{mainProduct.title}</h5>
                                <span>{mainProduct.price}</span>
                            </div>
                            <p>
                                The Brogue features a distinctive perforated design on
                                the upper, known as broguing, which adds a touch of
                                refinement and chara-ter to the wearer of the shoepair.
                            </p>
                            <h6>
                                Collection: <span>Products</span>
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