import React from 'react'
import BtnOrigin from '../../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../../main/componentsMain/BtnOrigin/InfoBtnOrigin'

function SectionDesc() {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <div>
                            <img src="/icons/logo.png" alt="logo" />
                            <p>
                                Welcome to Cobbler, your go-to destination for exquisite footwear & exceptional craftsmanship.
                                With a passion for quality and timeless style,
                                we pride ourselves with this.
                            </p>
                        </div>
                        <div>
                            <h5>Categories</h5>
                            <ul>
                                <li>
                                    <a href="#">Food & Drinks</a>
                                    <a href="#">Vegetables</a>
                                    <a href="#">Fruits</a>
                                    <a href="#">Dairy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Essential Links</h5>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                    <a href="#">Cart</a>
                                    <a href="#">Shop</a>
                                    <a href="#">Product Detail</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Subscribe to Our Newsletter</h5>
                            <div>
                                <input type="text" placeholder='Your Email' />
                            </div>
                            <BtnOrigin text={InfoBtnOrigin[5].info}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionDesc