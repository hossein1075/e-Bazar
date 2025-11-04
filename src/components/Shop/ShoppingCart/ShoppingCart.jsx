import React from 'react'
import BtnOrigin from '../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../main/componentsMain/BtnOrigin/InfoBtnOrigin'

function ShoppingCart() {
    return (
        <>
            <section className='text-xl mt-16 md:mt-24'>
                <div className="container">
                    <div className=''>
                        <div className='flex flex-col sm:flex-row items-center justify-between border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub mb-8 p-4 max-w-214'>
                            <div>
                                <img src="/images/Products/p-1.png" className='size-30 rounded-sm' alt="product" />
                            </div>
                            <div className='flex flex-row sm:flex-col justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0 mt-5 sm:mt-0'>
                                <h5>Item:</h5>
                                <span className='font-bold font-Lato-Bold'>benana</span>
                            </div>
                            <div className='flex flex-row w-full sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                                <h5>Price</h5>
                                <span className='font-bold font-Lato-Bold'>$50</span>
                            </div>
                            <div className='flex flex-row w-full flex-wrap sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                                <h5>Quantity</h5>
                                <div>

                                    <ul className='flex *:rounded-10px *:size-10 gap-2 font-bold font-Lato-Bold'>
                                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                                            <button>
                                                -
                                            </button>
                                        </li>

                                        <li className='bg-orange-600 flexCenter shadow-sub text-xl text-zinc-50'>
                                            <button>
                                                1
                                            </button>
                                        </li>

                                        <li className='bg-zinc-50 flexCenter shadow-sub text-xl'>
                                            <button>
                                                +
                                            </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className='flex flex-row w-full sm:w-auto sm:flex-col justify-between sm:justify-around gap-2 items-center sm:h-[120px] mb-2.5 sm:mb-0'>
                                <h5>Sub Total</h5>
                                <span className='font-bold font-Lato-Bold'>$50</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Cart Detail</h4>
                                <div>ّ
                                    <span>items</span>
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