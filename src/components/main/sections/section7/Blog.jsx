import React from 'react'
import PaginationBox from '../../componentsMain/PaginateBox/PaginationBox'
import SVGPaginationRight from '../../componentsMain/SVGPagination/SVGPaginationRight'
import SVGPaginationLeft from '../../componentsMain/SVGPagination/SVGPaginationLeft'
import './blog.css'
function Blog() {
  return (
    <>
    <section className='2xl:mb-20 xl:mb-15 middle:mb-12 mb-8'>
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-2 middle:grid-cols-3 gap-6 justify-center'>
                <PaginationBox/>
                <PaginationBox/>
                <PaginationBox/>
            </div>

            <div>
               <ul className='flexCenter gap-1.5 mt-6.25 *:hover:bg-orange-600 *:hover:text-zinc-50 *:rounded-10px *:size-8'>
                <li className='transition-original flexCenter'>
                    <a href="#">
                        <SVGPaginationLeft/>
                    </a>
                </li>
                <li className='transition-original flexCenter active-number'>
                    <a href="#">01</a>
                </li>
                <li className='transition-original flexCenter'>
                    <a href="#">...</a>
                </li>
                <li className='transition-original flexCenter'>
                    <a href="#">05</a>
                </li>
                <li className='transition-original flexCenter'>
                    <a href="#">
                        <SVGPaginationRight/>
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