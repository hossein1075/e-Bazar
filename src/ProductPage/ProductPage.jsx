import React, { useContext } from 'react'
import Header from '../components/header/Header'
import ShopBanner from '../components/Shop/Title/ShopBanner'
import BtnOrigin from '../components/main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../components/main/componentsMain/BtnOrigin/InfoBtnOrigin'
import { useLocation, useParams } from 'react-router-dom'
import { ProductsContext } from '../Contexts/ProductsContext'
import Footer from '../components/footer/Footer'

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
            <section className='mt-20 mb-10 middle:mb-17 md:mt-25 pt-20 md:pt-25'>
                <div className="container flex middle:block justify-center">
                    <div className='flex flex-col middle:flex-row gap-6 max-w-[696px] middle:max-w-none'>
                        <div className='border-t-3  border-solid border-orange-600 basis-[50%]'>
                            <img src={mainProduct.img} className='w-full rounded-b-3xl shadow-sub' alt="product img" />
                        </div>
                        <div className='basis-[50%]'>
                            <div className='flex items-center gap-4 mb-4'>
                                <h5 className='tracking-tightest font-RobotoSerif-Regular text-3xl sm:text-[40px] leading-[120%]'>{mainProduct.title}</h5>
                                <span className='font-bold text-27px tracking-tightest3 p-2 bg-zinc-900 text-zinc-50 flexCenter w-15 h-12.5'>${mainProduct.price}</span>
                            </div>
                            <p className='mb-8 leading-[120%] max-w-101'>
                                The Brogue features a distinctive perforated design on
                                the upper, known as broguing, which adds a touch of
                                refinement and chara-ter to the wearer of the shoepair.
                            </p>
                            <div className='mb-8'>
                                <h6 className='text-27px tracking-tightest3 mb-4 leading-[130%] '>
                                    Collection: <span className='font-bold font-Lato-Bold text-lg sx:text-xl ml-4'>Products</span>
                                </h6>
                                <h6 className='text-27px tracking-tightest3 mb-4 leading-[130%] '>
                                    SKU: <span className='font-bold font-Lato-Bold text-lg sx:text-xl ml-4'>12 323 43</span>
                                </h6>
                                <h6 className='text-27px tracking-tightest3 mb-4 leading-[130%] '>
                                    Quantity: <span className='font-bold font-Lato-Bold text-lg sx:text-xl ml-4'>/500g</span>
                                </h6>
                            </div>
                                <ul className='flex *:rounded-10px  gap-2 font-bold font-Lato-Bold mb-12'>
                                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl w-12 h-13.25'>
                                            <button className='w-full'>
                                                -
                                            </button>
                                        </li>

                                        <li className='bg-orange-600 flexCenter shadow-sub text-xl text-zinc-50 w-12 h-13.25'>
                                            01
                                        </li>

                                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl w-12 h-13.25'>
                                            <button className='w-full'>
                                                +
                                            </button>
                                        </li>
                                    </ul>
                            <div className='flex flex-col sx:flex-row gap-8'>
                                <BtnOrigin text={InfoBtnOrigin[2].info} />
                                <BtnOrigin text={InfoBtnOrigin[11].info} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ProductPage