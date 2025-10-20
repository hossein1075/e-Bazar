import React from 'react'
import BtnOrigin from '../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../BtnOrigin/InfoBtnOrigin'
function CategoryBox() {
  return (
    <>
      <div className='relative overflow-hidden border-t-3 border-solid border-orange-600 rounded-b-3xl shadow-sub  py-3 sm:p-0 text-center sm:text-left bg-white sm:bg-transparent'>
        <img src="/images/c-2.png" className='hidden sm:block w-full  transition-all duration-500 ease-linear hover:scale-110' alt="category" />
        <div className='sm:absolute sm:top-1/2 sm:left-[3%] sm:-translate-y-1/2'>
          <h2 className='mb-2 font-bold tracking-tightest text-orange-600'>
            <span className='text-4x-l-5 lg:text-6xl'>
            10%
            </span>
            <span className='inline-block ml-2 lg:ml-4.25 text-xl lg:text-2xl'>OFF</span>
          </h2>

          <h4 className='text-3xl md:text-4xl tracking-tightest2 mb-4 md:mb-8'>White Bread</h4>
          <BtnOrigin text={InfoBtnOrigin[1].info} />
        </div>
      </div>

    </>
  )
}

export default CategoryBox