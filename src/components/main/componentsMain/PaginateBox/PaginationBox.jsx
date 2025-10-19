import React from 'react'
import { PiSquareLight } from "react-icons/pi";
import BtnOrigin from '../BtnOrigin/BtnOrigin';
import InfoBtnOrigin from '../BtnOrigin/InfoBtnOrigin';
import './PaginationBox.css'
function PaginationBox() {
    return (
        <>
            <div className='w-[306px] rounded-3xl shadow-sub overflow-hidden'>
                <div className='object-cover'>
                    <img src="/images/blog/blog-1.png" className='w-full' alt="fruit blog" />
                </div>
                <div className='p-5'>
                    <div className='flexCenter gap-6 border-b-1 border-neutral-600/50 border-solid pb-4 mb-4'>
                    <span>22 Dec, 2024</span>
                    <span className='flex items-center before-name gap-1'>
                        <PiSquareLight size={15}/>
                        Malisa John
                    </span>
                </div>
                <h3 className='line-clamp-2 mb-2 hover:text-orange-600 transition-original text-xl'>
                  <a href="#">
                      Cross-Cultural Encounters and Insights
                  </a>
                </h3>
                <p className='mb-4 line-clamp-2 tracking-tightest4'>
                     Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.
                </p>
                <div>
                    <BtnOrigin text={InfoBtnOrigin[4].info} className='w-full'/>
                </div>
                </div>
            </div>
        </>
    )
}

export default PaginationBox