import React from 'react'
import BtnOrigin from '../../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../../main/componentsMain/BtnOrigin/InfoBtnOrigin'

function SectionDesc() {
    return (
        <>
            <section className=''>
                <div className="container flex items-center justify-center">
                    <div className='flex flex-wrap justify-center gap-8'>
                        <div>
                            <img src="/icons/logo.png" className='mb-8' alt="logo" />
                            <p className='tracking-tightest4 max-w-54'>
                                Welcome to Cobbler, your go-to destination for exquisite footwear & exceptional craftsmanship.
                                With a passion for quality and timeless style,
                                we pride ourselves with this.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-27px font-bold font-Lato-Bold mt-4 md:mt-0 mb-4 tracking-tightest3'>Categories</h5>
                            <ul>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Food & Drinks</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Vegetables</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Fruits</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Dairy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-27px font-bold font-Lato-Bold mt-4 md:mt-0 mb-4 tracking-tightest3'>Essential Links</h5>
                            <ul>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Cart</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Shop</a>
                                </li>
                                <li className='font-RobotoSerif-Regular tracking-tightest4 mb-2 hover:text-orange-600 transition-original'>
                                    <a href="#">Product Detail</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-27px font-bold font-Lato-Bold mt-4 md:mt-0 mb-4 tracking-tightest3'>Subscribe to Our Newsletter</h5>
                            <div className='mb-3.75'>
                                <input type="text" placeholder='Your Email' className='outline-none border-b-1 border-solid border-neutral-600 w-full tracking-tightest4' />
                            </div>
                            <BtnOrigin text={InfoBtnOrigin[5].info} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionDesc