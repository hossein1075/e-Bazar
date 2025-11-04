import React from 'react'
import BtnOrigin from '../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../main/componentsMain/BtnOrigin/InfoBtnOrigin'

function ShoppingCart() {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <div>
                            <div>
                                <img src="/images/Products/p-1.png" alt="product" />
                            </div>
                            <div>
                                <h5>item:</h5>
                                <span>benana</span>
                            </div>
                            <div>
                                <h5>Price:</h5>
                                <span>$50</span>
                            </div>
                            <div>
                                <h5>Quantity</h5>
                                <div>

                                    <ul>
                                        <li>
                                            <button>
                                                -
                                            </button>
                                        </li>

                                        <li>
                                            <button>
                                                1
                                            </button>
                                        </li>

                                        <li>
                                            <button>
                                                +
                                            </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div>
                                <h5>Sub Total</h5>
                                <span>$50</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Cart Detail</h4>
                                <div>ّ
                                    <span>items:</span>
                                    <span>2</span>
                                </div>

                                <div>ّ
                                    <span>Grand Total</span>
                                    <span>$355.90</span>
                                </div>
                                <BtnOrigin text={InfoBtnOrigin[7].info}/>
                            </div>
                        </div>
                        <BtnOrigin text={InfoBtnOrigin[8].info}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingCart