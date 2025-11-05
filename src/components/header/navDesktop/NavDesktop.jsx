import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsBox2Heart } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { ProductsContext } from '../../../Contexts/ProductsContext';
import { Link, NavLink } from 'react-router-dom';
function NavDesktop() {

    const contextData = useContext(ProductsContext)
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-orange-200 lg:block hidden z-50'>
                <div className="container">
                    <div className='flex items-center justify-between py-6.25'>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <ul className='flexCenter gap-8'>
                            <li>
                                <NavLink to="/" className='text-xl hover:text-orange-600 transition-original'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className='text-xl hover:text-orange-600 transition-original'>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className='text-xl hover:text-orange-600 transition-original'>
                                    About
                                </NavLink>
                            </li>
                            <li className='relative group'>
                                <NavLink to="#" className='text-xl hover:text-orange-600 transition-original'>
                                    Blogs
                                </NavLink>

                                {/* subMenu */}

                               <div className='absolute top-[105%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                 <ul className='*:py-2'>
                                    <li>
                                        <NavLink to="#" className='text-xl block hover:text-orange-600 transition-original'>Blog Listing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className='text-xl block hover:text-orange-600 transition-original'>Blog Detail</NavLink>
                                    </li>
                                </ul>
                               </div>
                            </li>
                            <li className='relative group'>
                                <NavLink to="#" className='text-xl hover:text-orange-600 transition-original'>
                                    Pages
                                </NavLink>
                                  {/* subMenu */}

                              <div className='absolute top-[105%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                  <ul className='*:py-2'>
                                    <li>
                                        <NavLink to="#" className='text-xl block hover:text-orange-600 transition-original'>Product Detail</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className='text-xl block hover:text-orange-600 transition-original'>Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className='text-xl block hover:text-orange-600 transition-original'>Checkout</NavLink>
                                    </li>
                                </ul>
                              </div>
                            </li>
                        </ul>

                        <div className='flex items-center justify-between gap-8'>
                            <NavLink to='#' className='inline-block *:size-7.5'>
                                <CiSearch />
                            </NavLink>
                            <NavLink to='#' className='inline-block *:size-7.5'>
                                <BsBox2Heart />
                            </NavLink>
                            <NavLink to='#' className='inline-block *:size-7.5' onClick={()=> {contextData.setIsShowSide(true)}}>
                                <PiShoppingCartLight />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop