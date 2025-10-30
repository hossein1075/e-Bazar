import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import BtnOrigin from '../main/componentsMain/BtnOrigin/BtnOrigin';
import InfoBtnOrigin from '../main/componentsMain/BtnOrigin/InfoBtnOrigin';
import { ProductsContext } from '../../Contexts/ProductsContext';
function SideBar() {

    const contextData = useContext(ProductsContext)
    return (
        <>
       

            <div className={`fixed top-0 bottom-0 right-0 w-[450px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${contextData.isShowSide ? 'translate-x-[0%]' : 'translate-x-[100%]'} h-full z-[9999] bg-zinc-50 py-8 px-6`}>
                <div className='relative h-full'>
                    <div className='flex items-center justify-between mb-8 font-RobotoSerif-Bold font-bold'>
                        <h3>
                            WISHLIST ITEMS
                            <span className='tracking-tightest4 text-xs sx:ml-0.5'>(2)</span>
                        </h3>
                        <span onClick={() => contextData.setIsShowSide(false)} className='cursor-pointer'>
                            <IoMdClose className='size-7' />
                        </span>
                    </div>
                    <div className='overflow-Y-scroll'>
                        {contextData.cart.map((item, index) => (
                        <div className='flex flex-col sx:flex-row items-center gap-4 mb-5'>
                            <div className='size-20'>
                                <img src={item.img} className='w-full object-cover' alt="Picture Product" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h5 className='font-bold font-Lato-Bold text-zinc-900 mb-2'>{item.title}</h5>
                                <h6 className='font-bold font-Lato-Bold text-zinc-900 mb-4'>1 x {item.price}</h6>
                                <button className='text-orange-600 font-medium'>
                                    <a href="#">REMOVE</a>
                                </button>
                            </div>
                        </div>
                        ))}
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