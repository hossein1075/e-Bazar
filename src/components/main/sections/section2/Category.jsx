import React from 'react'
import CategoryBox from '../../componentsMain/CategoryBox/CategoryBox'

function Category() {
    return (
        <>
            <section className='mb-5'>
                <div className="container">
                   <div className='grid md:grid-cols-2 items-center gap-6'>
                     <CategoryBox/>
                    <CategoryBox/>
                   </div>
                </div>
            </section>
        </>
    )
}

export default Category