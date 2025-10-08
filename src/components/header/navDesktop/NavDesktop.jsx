import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
function NavDesktop() {
    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <a href="#">
                            <img src="/icons/logo.png" alt="e-bazar" />
                        </a>

                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#">
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
                                <a href="#">
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

                        <div>
                            <span>
                                <CiSearch />
                            </span>
                            <span>
                                <AiOutlineInbox />
                            </span>
                            <span>
                                <MdOutlineShoppingCart/>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop