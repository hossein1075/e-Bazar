import React from 'react'
import PaginationBox from '../../componentsMain/PaginateBox/PaginationBox'
import SVGPaginationRight from '../../componentsMain/SVGPagination/SVGPaginationRight'
import SVGPaginationLeft from '../../componentsMain/SVGPagination/SVGPaginationLeft'
function Blog() {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <PaginationBox/>
            </div>

            <div>
               <ul>
                <li>
                    <a href="#">
                        <SVGPaginationRight/>
                    </a>
                </li>
                <li>
                    <a href="#">01</a>
                </li>
                <li>
                    <a href="#">
                        <SVGPaginationLeft/>
                    </a>
                </li>
               </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog