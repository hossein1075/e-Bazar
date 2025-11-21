import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import BtnOrigin from '../main/componentsMain/BtnOrigin/BtnOrigin';
import InfoBtnOrigin from '../main/componentsMain/BtnOrigin/InfoBtnOrigin';
import { ProductsContext } from '../../Contexts/ProductsContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function SideBar() {

    const contextData = useContext(ProductsContext)
    return (
        <>


            <div className={`fixed top-0 bottom-0 right-0 sm:max-w-[450px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${contextData.isShowSide ? 'translate-x-[0%]' : 'translate-x-[100%]'} h-full z-[998] bg-zinc-50 py-8 px-6`}>
                <div className='relative h-full flex flex-col'>
                    <div className='flex items-center justify-between mb-8 font-RobotoSerif-Bold font-bold'>
                        <h3>
                            WISHLIST ITEMS
                            <span className='tracking-tightest4 text-xs sx:ml-0.5'>({contextData.cart.reduce((total, item) => total + item.count, 0)})</span>
                        </h3>
                        <span onClick={() => contextData.setIsShowSide(false)} className='cursor-pointer'>
                            <IoMdClose className='size-7' />
                        </span>
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        {contextData.cart.map((item, index) => (
                            <div key={index} className='flex flex-col sx:flex-row items-center gap-4 mb-5'>
                                <div className='size-20'>
                                    <img src={item.img} className='w-full object-cover' alt="Picture Product" />
                                </div>
                                <div className='flex flex-col items-center sx:items-start mt-4 sx:mt-0 '>
                                    <h5 className='font-bold font-Lato-Bold text-zinc-900 mb-2'>{item.title}</h5>
                                    <h6 className='font-bold font-Lato-Bold text-zinc-900 mb-4'>{item.count} x ${item.price * item.count}</h6>
                                    <button className='text-orange-600 font-medium'>
                                        <Link to="#" onClick={() => contextData.removeCart(item.id)}>REMOVE</Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flexCenter mt-4'>
                        <div className='flex flex-col justify-center sx:flex-row  gap-2'>
                            <BtnOrigin text={InfoBtnOrigin[6].info} to='/shop' />
                            <BtnOrigin text={InfoBtnOrigin[7].info} onClick={() => {
                                Swal.fire({
                                    title: 'Confirm Purchase',
                                    text: "Do you want to complete your purchase?",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: '#28a745',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, checkout!',
                                    cancelButtonText: 'No, keep shopping'
                                }).then(result => {
                                    if (result.isConfirmed) {
                                        contextData.setCart([])
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Purchase Completed!',
                                            text: 'Thank you for your order.',
                                            timer: 2000,
                                            showConfirmButton: true,
                                        })
                                    } else {
                                        Swal.fire({
                                            icon: 'info',
                                            title: 'Cancelled',
                                            text: 'You can continue shopping.',
                                            timer: 1500,
                                            confirmButtonText: 'Close',
                                        })
                                    }
                                })
                            }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar