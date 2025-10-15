import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function NavMobile() {
    const [open, setOpen] = useState(false)

    const openSubMenu = () => {
        setOpen(!open)
    }
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-orange-200 block lg:hidden z-50  '>
                <div className="container relative">
                    <div className='flex items-center justify-between py-6.25'>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <a href="#" className='inline-block *:size-[25px]' onClick={openSubMenu}>
                            {open ? <IoMdClose/> : <FaBars />}

                        </a>

                        {/* subMenu */}

                        <div className={`absolute top-[67%] right-[12%] bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-50 shadow-sub 
                             transition-original ${open ? 'max-w-63 opacity-100' : 'max-w-0 opacity-0'}`}>
                            <ul className='*:py-2'>
                                <li className='text-orange-600 transition-original'>
                                    <a href="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-xl hover:text-orange-600 transition-original'>
                                        About
                                    </a>
                                </li>
                                <li className='relative group'>
                                    <a href="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Blogs
                                    </a>

                                    {/* subMenu */}

                                    <div className='absolute top-[96%] right-[64%] hidden group-hover:block z-50 bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                        <ul className='*:py-2'>
                                            <li>
                                                <a href="#" className='text-xl block hover:text-orange-600 transition-original'>Blog Listing</a>
                                            </li>
                                            <li>
                                                <a href="#" className='text-xl block hover:text-orange-600 transition-original'>Blog Detail</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group'>
                                    <a href="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Pages
                                    </a>
                                    {/* subMenu */}

                                     <div className='absolute top-[96%] right-[64%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                  <ul className='*:py-2'>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-original'>Product Detail</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-original'>Cart</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-original'>Checkout</a>
                                    </li>
                                </ul>
                              </div>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMobile