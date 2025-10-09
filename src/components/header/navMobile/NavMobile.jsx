import React from 'react'
import { FaBars } from "react-icons/fa";
function NavMobile() {
    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <a href="#">
                            <FaBars />
                        </a>

                        {/* subMenu */}

                         <ul className='hidden *:hover:text-orange-600 *:transition-all *:duration-500 *:ease-in-out'>
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

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMobile