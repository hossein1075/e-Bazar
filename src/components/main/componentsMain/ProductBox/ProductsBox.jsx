import React from 'react'
import BtnOrigin from '../BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../BtnOrigin/InfoBtnOrigin'
import { BsBox2Heart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
function ProductsBox() {
  return (
    <>
    <div>
        <div>
            <img src="/images/Products/p-12.png" alt="Product" />
            <span>$35</span>
        </div>
        <div>
            <a href="#">Eggs</a>
            <BtnOrigin text={InfoBtnOrigin[2].info}/>
        </div>
    </div>

    </>
  )
}

export default ProductsBox