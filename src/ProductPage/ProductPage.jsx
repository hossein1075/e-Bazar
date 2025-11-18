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
            <section className='mt-20 md:mt-25 pt-20 md:pt-25'>
                <div className="container">
                    <div className='flex'>
                        <div>
                            <img src={mainProduct.img} alt="product img" />
                        </div>
                        <div>
                            <div className='flex'>
                                <h5>{mainProduct.title}</h5>
                                <span className='font-bold text-27px tracking-tightest3 p-2 bg-zinc-900 text-zinc-50'>${mainProduct.price}</span>
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
                            <div>

                    <ul className='flex *:rounded-10px *:size-10 gap-2 font-bold font-Lato-Bold'>
                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button className='w-full'>
                                -
                            </button>
                        </li>

                        <li className='bg-orange-600 flexCenter shadow-sub text-xl text-zinc-50'>
                               01
                        </li>

                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                            <button className='w-full'>
                                +
                            </button>
                        </li>
                    </ul>

                </div>
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