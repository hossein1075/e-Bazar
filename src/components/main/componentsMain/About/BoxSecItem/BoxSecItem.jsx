import React from 'react'

function BoxSecItem({title, img}) {
  return (
    <>
     <div className='flex flex-col items-center w-77 bg-orange-50 shadow-sub border-t-3 border-solid border-orange-600 rounded-b-3xl p-8'>
                <div className='mb-4'>
                    <img src={img} className='rounded-15px' alt="slide image" />
                </div>
                <h6 className='text-27px tracking-tightest3 font-Lato-Bold font-bold'>
                    {title}
                </h6>
            </div>
    </>
  )
}

export default BoxSecItem