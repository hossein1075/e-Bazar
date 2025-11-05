import React from 'react'
import BtnOrigin from '../../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../BtnOrigin/InfoBtnOrigin'

function CartDetail() {
    return (
        <>
            <div className=''>
                <h4 className='mb-8 font-Lato-Bold font-bold text-27px leading-[130%] tracking-tightest3'>Cart Detail</h4>
                <div className='flex justify-between mb-4'>
                    <span className='text-xl leading-[140%]'>Items Total</span>
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>$355.90</span>
                </div>
                <div className='flex justify-between mb-4'>
                    <span className='text-xl leading-[140%]'>Shipping Fee</span>
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
                    <span className='font-Lato-Bold font-bold text-xl leading-[140%]'>$355.90</span>
                </div>
                <BtnOrigin text={InfoBtnOrigin[7].info} className='w-full'/>
            </div>
        </>
    )
}

export default CartDetail