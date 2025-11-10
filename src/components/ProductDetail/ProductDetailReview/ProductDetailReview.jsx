import React from 'react'
import ProductDetailPerson from '../../main/componentsMain/ProductDetail/ProductDetailPerson/ProductDetailPerson'

function ProductDetailReview() {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <div>
                    <h3>Reviews(36)</h3>
                    <span>Product Detail</span>
                </div>
                <div>
                    <ProductDetailPerson/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailReview