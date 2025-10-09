import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsBox2Heart } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
function NavDesktop() {
    return (
        <>
            <nav className='bg-orange-200 lg:block hidden'>
                <div className="container">
                    <div className='flex items-center justify-between p-6.25 xl:mx-15'>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <ul className='flexCenter gap-8 *:hover:text-orange-600 *:transition-all *:duration-500 *:ease-in-out'>
                            <li className='text-orange-600 transition-all duration-500 ease-in-out'>
                                <a href="#" className='text-xl'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-xl'>
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-xl'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-xl'>
                                    Blogs
                                </a>

                                {/* subMenu */}

                                <ul className='hidden'>
                                    <li>
                                        <a href="#">Blog Listing</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog Detail</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className='leading-[140%] text-xl'>
                                    Pages
                                </a>
                                  {/* subMenu */}

                                <ul className='hidden'>
                                    <li>
                                        <a href="#">Product Detail</a>
                                    </li>
                                    <li>
                                        <a href="#">Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">Checkout</a>
                                    </li>
                                </ul>
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