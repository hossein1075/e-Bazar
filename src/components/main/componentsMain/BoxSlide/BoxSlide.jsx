import React from 'react'

function BoxSlide() {
    return (
        <>
            <div className='bg-zinc-800 border-t-3 border-solid border-orange-600 rounded-b-3xl p-6 text-zinc-50'>
                <div className='flex items-center mb-4 gap-4'>
                    <img src="/images/slider/Image.png" className='rounded-15px' alt="slide image" />
                    <h6 className='font-bold text-xl'>Richard Johnson</h6>
                </div>
                <p className='text-base'>
                    Cobbler's shoes are the epitome of style and elegance. I receive compliments every time I wear them.
                    The craftsmanship is outstanding, and the fit is perfect.
                </p>
            </div>
        </>
    )
}

export default BoxSlide