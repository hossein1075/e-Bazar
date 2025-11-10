import React from 'react'
import BtnOrigin from '../../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../BtnOrigin/InfoBtnOrigin'

function ProductDetailForm() {
    return (
        <div className='bg-orange-50 shadow-sub border-t-3 border-solid border-orange-600 rounded-b-3xl sm:w-[500px] lg:w-auto lg:max-w-none py-8 px-6'>
            <h6 className='text-start text-4x-l-5 tracking-tightest  font-RobotoSerif-Regular mb-8'>Add a Review</h6>
            <form action="#">
                <div className=''>
                    <div className='mb-8'>
                        <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Name'/>
                    </div>
                    <div className='mb-8'>
                        <input type="text" className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Email'/>
                    </div>
                    <div className='mb-8'>
                        <textarea type="text" rows={3} className='w-full border-b-1 border-neutral-600 outline-none' placeholder='Your Review'/>
                    </div>
                    <BtnOrigin text={InfoBtnOrigin[9].info}/>
                </div>
            </form>
        </div>
    )
}

export default ProductDetailForm