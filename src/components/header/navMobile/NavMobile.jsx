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
            <nav className='bg-orange-200 block lg:hidden relative'>
                <div className="container">
                    <div className='flex items-center justify-between p-6.25'>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <a href="#" className='inline-block *:size-5' onClick={openSubMenu}>
                            {open ? <IoMdClose /> : <FaBars />}

                        </a>

                        {/* subMenu */}

                        <div className={`absolute top-[67%] right-[12%] bg-orange-50 border-t-3 border-solid border-orange-600 rounded-t-none rounded-b-[25px] py-3.75 px-6 z-40 w-50 shadow-sub 
                            overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-w-63 opacity-100' : 'max-w-0 opacity-0'}`}>
                            <ul className='*:hover:text-orange-600 *:transition-all *:duration-500 *:ease-in-out *:py-2'>
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
                                    <a href="#" className='text-xl'>
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
                        </div>



                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMobile