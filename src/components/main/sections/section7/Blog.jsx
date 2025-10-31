import React, { useEffect, useMemo, useState } from 'react'
import PaginationBox from '../../componentsMain/PaginateBox/PaginationBox'
import SVGPaginationRight from '../../componentsMain/SVGPagination/SVGPaginationRight'
import SVGPaginationLeft from '../../componentsMain/SVGPagination/SVGPaginationLeft'
import './blog.css'
import useSWR from 'swr'
import { paginateImgBox } from '../../../../APIimg'

const fetcher = (url) => fetch(url).then(res => res.json())

function Blog() {
    const [currentPage, setCurrentPage] = useState(1)
    const [pagination, setPagination] = useState()
    let pageSize = 3
    let pageNumber
    const { data, error, isLoading  } = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/blog.json',
        fetcher
    )

    const paginateProduct = useMemo(() => {
        return data ? Object.entries(data).map(([key, value]) => ({
            id:key,
            ...value
        })) : []
    }, [data])

    useEffect(() => {
        if (paginateProduct.length > 0) {
            let endIndex = pageSize * currentPage
            let firstIndex = endIndex - pageSize
            let allIndex = paginateProduct.slice(firstIndex, endIndex)
            setPagination(allIndex)
        }
    }, [currentPage, paginateProduct])

    const changeHandler = (next) => {
        setCurrentPage(next)
        let endIndex = pageSize * next
        let firstIndex = endIndex - pageSize
        let allIndex = paginateProduct.slice(firstIndex, endIndex)
        setPagination(allIndex)
    }
    let pageCount = Math.ceil(paginateProduct.length / pageSize)
    pageNumber = Array.from(Array(pageCount).keys())

    return (
        <>
            <section className='2xl:mb-20 xl:mb-15 middle:mb-12 mb-8'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 middle:grid-cols-3 gap-6 justify-center'>
                        {pagination && pagination.map((item, index) => {
                            const realIndex =(currentPage - 1) * pageSize + index
                            const paginateProductImg = paginateImgBox[realIndex % paginateImgBox.length]
                            return (
                                <PaginationBox
                                    key={item.id}
                                    title={item.title}
                                    img={paginateProductImg.img}
                                />)
                        })}
                    </div>

                    <div>
                        <ul className='flexCenter gap-1.5 mt-6.25 *:hover:bg-orange-600 *:hover:text-zinc-50 *:rounded-10px *:size-8'>
                            <li className={`transition-original flexCenter`} onClick={(e) => {e.preventDefault() , changeHandler(currentPage - 1)}}>
                                <button disabled={currentPage === 1}>
                                    <SVGPaginationLeft />
                                </button>
                            </li>
                            {pageNumber.map(item => (
                            <li key={item} className={`transition-original flexCenter ${item + 1 === currentPage ? 'active-number' : ''}`} onClick={(e) => { e.preventDefault() ,changeHandler(item + 1)}}>
                                <button>{item + 1}</button>
                            </li>
                            ))}
                            <li className={`transition-original flexCenter`} onClick={(e) => {e.preventDefault() , changeHandler(currentPage + 1)}}>
                                <button disabled={currentPage === pageCount}>
                                    <SVGPaginationRight />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog