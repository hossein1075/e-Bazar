import React, { useContext } from 'react'
import BtnOrigin from '../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../main/componentsMain/BtnOrigin/InfoBtnOrigin'
import ItemProduct from '../../main/componentsMain/Shop/ItemProduct/ItemProduct'
import CartDetail from '../../main/componentsMain/Shop/CartDetail/CartDetail'
import { ProductsContext } from '../../../Contexts/ProductsContext'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


function ShoppingCart() {
    const contextData = useContext(ProductsContext)
    return (
        <>
            <section className='text-xl mt-16 md:mt-24'>
                <div className="container">
                    <div className='lg:flex gap-6 items-start'>
                        <div className='flex flex-col flex-wrap lg:basis-[70%] mx-auto w-full'>
                            {contextData.cart.length === 0 ? (
                               <>
                              
                               <div className='border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub mb-8 p-4'>
                                 <div>
                                <h5 className='mb-.5'>in cart: 0 products</h5>
                                <h5>total price: $0.00</h5>
                               </div>
                               <div className='flex justify-center mb-1'>
                                <MdOutlineRemoveShoppingCart size={80}/>
                               </div>
                               <p className='text-center font-bold font-Lato-Bold'> You can add new items in your basket what you waiting for?</p>
                               </div>
                               </>

                            ) : (
                                contextData.cart.map(item => (
                                    <ItemProduct key={item.id} item={item} />
                                ))
                            )}

                        </div>
                        <div className='lg:basis-[30%] mx-auto max-w-[500px] lg:max-w-none border-t-3 border-solid border-orange-600 bg-orange-100 rounded-b-3xl shadow-sub py-8 px-6'>
                            <CartDetail />
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <BtnOrigin text={InfoBtnOrigin[8].info} className='mt-5 lg:mt-0' to={'/'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingCart