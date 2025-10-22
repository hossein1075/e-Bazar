import React from 'react'
import { IoMdClose } from "react-icons/io";
import BtnOrigin from '../main/componentsMain/BtnOrigin/BtnOrigin';

function SideBar() {
  return (
    <>
    <div>
        <div>
            <h3>
                WISHLIST ITEMS
                <span>(2)</span>
            </h3>
            <span>
                <IoMdClose />
            </span>
        </div>
        <div>
            <div>
                <img src="/images/SideBar/c-1.png" alt="Picture Product" />
            </div>
            <h5>Timeless Trellis Lace Dress</h5>
            <h6>1 x $140.99</h6>
            <button>
                <a href="#">REMOVE</a>
            </button>
        </div>
        <div>
            <BtnOrigin/>
            <BtnOrigin/>
        </div>
    </div>
    </>
  )
}

export default SideBar