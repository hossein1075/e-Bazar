import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../../Contexts/ProductsContext';

function NavMobile() {
    const [open, setOpen] = useState(false)
    const contextData = useContext(ProductsContext)

    const openSubMenu = () => {
        setOpen(!open)
    }
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-orange-200 block lg:hidden z-50  '>
                <div className="container relative">
                    <div className='flex items-center justify-between py-6.25'>
                        <NavLink to="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </NavLink>

                        <NavLink to="#" className='inline-block *:size-[25px]' onClick={openSubMenu}>
                            {open ? <IoMdClose /> : <FaBars />}

                        </NavLink>

                        {/* subMenu */}

                        <div className={`absolute top-[67%] right-[12%] bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-50 shadow-sub 
                             transition-original ${open ? 'max-w-63 opacity-100' : 'max-w-0 opacity-0'}`}>
                            <ul className='*:py-2'>
                                <li className='text-orange-600 transition-original'>
                                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original' }>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original' }>
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original' }>
                                        About
                                    </NavLink>
                                </li>
                                <li className='relative group'>
                                    <NavLink to="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Blogs
                                    </NavLink>

                                    {/* subMenu */}

                                    <div className='absolute top-[96%] right-[64%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                        <ul className='*:py-2'>
                                            <li>
                                                <NavLink to="/blogList" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original block' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original block' }>Blog Listing</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/blogDetail" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original block' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original block' }>Blog Detail</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group'>
                                    <NavLink to="#" className='text-xl hover:text-orange-600 transition-original'>
                                        Pages
                                    </NavLink>
                                    {/* subMenu */}

                                    <div className='absolute top-[96%] right-[64%] hidden group-hover:block bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-60 shadow-sub'>
                                        <ul className='*:py-2'>
                                            <li>
                                                <NavLink to="/productDetail" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original block' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original block' }>Product Detail</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original block' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original block' }>Cart</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/checkout" className={({ isActive }) => isActive ? 'text-xl text-orange-600 transition-original block' : 'text-xl hover:text-orange-600 text-neutral-800 transition-original block' }>Checkout</NavLink>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li>
                                    <NavLink to='#' className='text-xl hover:text-orange-600 transition-original' onClick={() => { contextData.setIsShowSide(true) }}>
                                        Basket
                                    </NavLink>
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