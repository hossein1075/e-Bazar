import React, { useEffect, useState } from 'react'
import CategoryBox from '../../componentsMain/CategoryBox/CategoryBox'
import { categoryBox } from '../../../../APIimg'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())
function Category() {
    const { data, error, isLoading } = useSWR(
        'https://info-products-7e7f7-default-rtdb.firebaseio.com/productsOff.json',
        fetcher
    )

    const products = data ? (Array.isArray(data) ? data : Object.values(data)) : [];


    return (
        <>
            <section className='mb-5'>
                <div className="container">
                    <div className='grid md:grid-cols-2 items-center gap-6'>
                        {products.map((item, index) => {
                            const imgData = categoryBox[index % categoryBox.length];
                            return (
                                <CategoryBox
                                    key={item.id}
                                    img={imgData.img}
                                    title={item.off}
                                    name={item.title}
                                />
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Category