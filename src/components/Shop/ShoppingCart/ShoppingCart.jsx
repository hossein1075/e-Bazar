import React from 'react'
import BtnOrigin from '../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../main/componentsMain/BtnOrigin/InfoBtnOrigin'
import ItemProduct from '../../main/componentsMain/Shop/ItemProduct/ItemProduct'
import CartDetail from '../../main/componentsMain/Shop/CartDetail/CartDetail'

function ShoppingCart() {
    return (
        <>
            <section className='text-xl mt-16 md:mt-24'>
                <div className="container">
                    <div className='lg:flex gap-6 items-start'>
                        <div className='flex lg:basis-[70%] mx-auto max-w-[500px] md:max-w-none flex-col sm:flex-row items-center justify-between border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub mb-8 p-4'>
                           <ItemProduct/>
                       </div>
                        <div className='lg:basis-[30%] mx-auto max-w-[500px] lg:max-w-none border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub py-8 px-6'>
                        <CartDetail/>
                        </div>
                    </div>
                  <div className='flex justify-center lg:justify-start'>
                     <BtnOrigin text={InfoBtnOrigin[8].info} className='mt-5 lg:mt-0'/>
                </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingCart