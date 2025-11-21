import React from 'react'

function ProductDetailPerson({ img, title, desc}) {
    return (
        <div className='mb-8'>
             <div className='flex items-center mb-4 gap-4'>
                    <img src={img} className='rounded-15px' alt="slide image" />
                    <h6 className='font-bold font-Lato-Bold text-xl'>{title}</h6>
                </div>
            <p className='leading-[150%] text-base tracking-tightest4 mb-4 max-w-200'>
                {desc}
            </p>
        </div>
    )
}

export default ProductDetailPerson