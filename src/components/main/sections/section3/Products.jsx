import React from 'react'
import ProductsBox from '../../componentsMain/ProductBox/ProductsBox'
function Products() {
  return (
    <>
    <section>
        <div className="container">
            <h1>All Products</h1>
            <div>
                <ul>
                    <li>All Products</li>
                    <li>Dairy</li>
                    <li>Food & Drinks</li>
                    <li>Fruits</li>
                    <li>Vegetables</li>
                </ul>
            </div>
            <div>
                <ProductsBox/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products