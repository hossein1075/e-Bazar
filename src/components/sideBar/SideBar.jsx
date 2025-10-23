import React from 'react'
import { IoMdClose } from "react-icons/io";
import BtnOrigin from '../main/componentsMain/BtnOrigin/BtnOrigin';
import InfoBtnOrigin from '../main/componentsMain/BtnOrigin/InfoBtnOrigin';

function SideBar() {
    return (
        <>
            <div className='fixed top-0 bottom-0 right-0 translate-x-[100%] h-full z-[9999] bg-zinc-50 py-8 px-6'>
                <div className='relative h-full'>
                    <div className='flex items-center justify-between mb-8 font-RobotoSerif-Bold font-bold'>
                        <h3>
                            WISHLIST ITEMS
                            <span className='tracking-tightest4 text-xs sx:ml-0.5'>(2)</span>
                        </h3>
                        <span>
                            <IoMdClose className='size-7' />
                        </span>
                    </div>
                    <div className='overflow-Y-scroll'>
                        <div className='flex flex-col sx:flex-row items-center gap-4'>
                            <div>
                                <img src="/images/SideBar/c-1.png" className='w-full object-cover' alt="Picture Product" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h5 className='font-bold font-Lato-Bold text-zinc-900 mb-2'>Timeless Trellis Lace Dress</h5>
                                <h6 className='font-bold font-Lato-Bold text-zinc-900 mb-4'>1 x $140.99</h6>
                                <button className='text-orange-600 font-medium'>
                                    <a href="#">REMOVE</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flexCenter'>
                        <div className='absolute bottom-0 flex flex-col sx:flex-row  gap-2'>
                            <BtnOrigin text={InfoBtnOrigin[6].info} />
                            <BtnOrigin text={InfoBtnOrigin[7].info} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar