import React, { useContext, useMemo } from 'react'
import BtnOrigin from '../../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../BtnOrigin/InfoBtnOrigin'
import { ProductsContext } from '../../../../../Contexts/ProductsContext'

function CartDetail() {

    const contextData = useContext(ProductsContext)

    const totalPrice = useMemo(() => {
        return contextData.cart.reduce((prev, next) => prev + next.price * next.count, 0)
    }, [contextData.cart])
    
    const grandTotal = totalPrice
    
    const ShippingFree = contextData.cart.length > 0 ? 5 : 0
    const Tax = contextData.cart.length > 0 ? 2.90 : 0
     const Discount = contextData.cart.length > 0 ? 20 : 0
    const grandTotalFinal = (totalPrice + Tax + ShippingFree - Discount)
    return (
        <>
            <div className=''>
                <h4 className='mb-8 font-Lato-Bold font-bold text-27px leading-[130%] tracking-tightest3'>Cart Detail</h4>
                <div className='flex justify-between mb-4'>
                    <span className='text-xl leading-[140%]'>Items Total</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>${grandTotal}</span>
                </div>
                <div className='flex justify-between mb-4'>
                    <span className='text-xl leading-[140%]'>Shipping Free</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>$05.00</span>
                </div>
                <div className='flex justify-between mb-4'>
                    <span className='text-xl leading-[140%]'>Tax</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>$02.90</span>
                </div>
                <div className='flex justify-between mb-4 pb-8'>
                    <span className='text-xl leading-[140%]'>Discount</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>$20.00</span>
                </div>

                <div className='flex justify-between pt-8 mb-8 border-t-3 border-solid border-orange-600'>
                    <span className='text-xl leading-[140%]'>Grand Total</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>{grandTotalFinal}</span>
                </div>
                <BtnOrigin text={InfoBtnOrigin[7].info} className='w-full' onClick={() => contextData.setCart([])}/>
            </div>
        </>
    )
}

export default CartDetail