import React from 'react'
import ProductDetailPerson from '../../main/componentsMain/ProductDetail/ProductDetailPerson/ProductDetailPerson'
import ProductDetailForm from '../../main/componentsMain/ProductDetail/ProductDetailReviewForm/ProductDetailForm'

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
                    <ProductDetailForm/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailReview