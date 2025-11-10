import React from 'react'
import BtnOrigin from '../../BtnOrigin/BtnOrigin'

function ProductDetailForm() {
  return (
    <div>
        <h6>Add a Review</h6>
        <form action="#">
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <BtnOrigin/>
        </form>
    </div>
  )
}

export default ProductDetailForm