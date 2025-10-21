import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
function SectionContact() {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <h5 className='text-27px font-bold font-Lato-Bold mt-4 md:mt-0 mb-4 tracking-tightest3'>Contact Info</h5>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <IoCallOutline />  <span>+1 233 898 0897</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <AiOutlineMail /> <span>email@example.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IoLocationOutline />  <span>123 Main Street, Anytown, USA.</span>
                                    </a>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/icons/footer/icon.png" alt="icon social network" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/icons/footer/Vector-1.png" alt="icon social network" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/icons/footer/Vector-2.png" alt="icon social network" />
                                            </a>

                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/icons/footer/Vector.png" alt="icon social network" />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <p>©2025 All rights are reserved by eBazar</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionContact