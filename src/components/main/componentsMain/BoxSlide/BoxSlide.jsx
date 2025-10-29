import React from 'react'

function BoxSlide({title, img, desc}) {
    return (
        <>
            <div className='bg-zinc-800 border-t-3 border-solid border-orange-600 rounded-b-3xl p-6 text-zinc-50'>
                <div className='flex items-center mb-4 gap-4'>
                    <img src={img}className='rounded-15px' alt="slide image" />
                    <h6 className='font-bold font-Lato-Bold text-xl'>{title}</h6>
                </div>
                <p className='text-base'>
                    {desc}
                </p>
            </div>
        </>
    )
}

export default BoxSlide