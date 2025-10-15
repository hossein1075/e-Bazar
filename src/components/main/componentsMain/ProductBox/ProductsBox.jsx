import React from 'react'
import BtnOrigin from '../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../BtnOrigin/InfoBtnOrigin'
import { BsBox2Heart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
function ProductsBox() {
  return (
    <>
      <div className='w-75 border-t-3 border-solid border-orange-600 mb-12 group'>
        <div className='relative w-full rounded-b-3xl shadow-sub mb-4 cursor-pointer object-cover'>
          <img src="/images/Products/p-12.png" className='w-full rounded-b-3xl' alt="Product" />
          <span className='absolute bottom-0 right-0 rounded-br-3xl font-bold text-27px tracking-tightest3 p-2.5 bg-zinc-900 text-zinc-50'>$35</span>
          <div className='absolute top-0 bottom-0 left-0 flexCenter opacity-0 group-hover:opacity-100 bg-zinc-800/60 rounded-b-3xl w-full h-full transition-all  duration-500 ease-in'>
            <div className='flexCenter gap-4  *:bg-zinc-50 *:size-10 *:rounded-10px'>
              <span className='flexCenter hover:text-orange-600 transition-original'>
                <BsBox2Heart size={20}/>
              </span>
              <span className='flexCenter hover:text-orange-600 transition-original'>
                <FaEye size={20}/>
              </span>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className='block group-hover:text-orange-600 transition-original tracking-tightest3 text-2xl md:text-27px mb-4'>Eggs</a>
          <div className='w-full'>
            <BtnOrigin text={InfoBtnOrigin[2].info} className='w-full' />
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductsBox