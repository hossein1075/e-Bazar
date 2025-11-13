import React from 'react'
import CheckOutForm from '../../main/componentsMain/CheckOut/CheckOutForm'
import BtnOrigin from '../../main/componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../main/componentsMain/BtnOrigin/InfoBtnOrigin'

function CheckOutFormSec() {
    return (
        <>
            <section className='py-8 sm:py-12'>
                <div className="container">
                    <div className='flex gap-8 flex-wrap justify-center'>
                        <div className='md:w-[600px]'>
                            <h6 className='text-start text-4x-l-5 tracking-tightest  font-RobotoSerif-Regular mb-8'>Shipping Detail</h6>
                            <CheckOutForm showLable='Billing Address Same As Shipping Address'/>
                        </div>
                        <div className='md:w-[600px]'>
                            <h6 className='text-start text-4x-l-5 tracking-tightest  font-RobotoSerif-Regular mb-8'>Billing Detail</h6>
                            <CheckOutForm showLable='Billing Address Same As Detail Address'/>
                        </div>
                    </div>
                   <div className='text-center sm:text-start mt-5'>
                     <BtnOrigin text={InfoBtnOrigin[10].info}/>
                   </div>
                </div>
            </section>
        </>
    )
}

export default CheckOutFormSec