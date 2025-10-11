import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsBox2Heart } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
function NavDesktop() {
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-orange-200 lg:block hidden z-50'>
                <div className="container">
                    <div className='flex items-center justify-between py-6.25'>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <ul className='flexCenter gap-8'>
                            <li className='text-orange-600 transition-all duration-500 ease-in-out'>
                                <a href="#" className='text-xl hover:text-orange-600 transition-all duration-500 ease-in-out'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-xl hover:text-orange-600 transition-all duration-500 ease-in-out'>
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-xl hover:text-orange-600 transition-all duration-500 ease-in-out'>
                                    About
                                </a>
                            </li>
                            <li className='relative group'>
                                <a href="#" className='text-xl hover:text-orange-600 transition-all duration-500 ease-in-out'>
                                    Blogs
                                </a>

                                {/* subMenu */}

                               <div className='absolute top-[105%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                 <ul className='*:py-2'>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-all duration-500 ease-in-out'>Blog Listing</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-all duration-500 ease-in-out'>Blog Detail</a>
                                    </li>
                                </ul>
                               </div>
                            </li>
                            <li className='relative group'>
                                <a href="#" className='text-xl hover:text-orange-600 transition-all duration-500 ease-in-out'>
                                    Pages
                                </a>
                                  {/* subMenu */}

                              <div className='absolute top-[105%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                  <ul className='*:py-2'>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-all duration-500 ease-in-out'>Product Detail</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-all duration-500 ease-in-out'>Cart</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-xl block hover:text-orange-600 transition-all duration-500 ease-in-out'>Checkout</a>
                                    </li>
                                </ul>
                              </div>
                            </li>
                        </ul>

                        <div className='flex items-center justify-between gap-8'>
                            <a href='#' className='inline-block *:size-7.5'>
                                <CiSearch />
                            </a>
                            <a href='#' className='inline-block *:size-7.5'>
                                <BsBox2Heart />
                            </a>
                            <a href='#' className='inline-block *:size-7.5'>
                                <PiShoppingCartLight />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop