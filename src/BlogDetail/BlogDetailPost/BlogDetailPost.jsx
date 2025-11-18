import React from 'react'
import SVGPaginationLeft from '../../components/main/componentsMain/SVGPagination/SVGPaginationLeft'
import SVGPaginationRight from '../../components/main/componentsMain/SVGPagination/SVGPaginationRight'

function BlogDetailPost() {
  return (
    <>
    <section className='mb-4'>
        <div className="container">
            <div className='middle:flex justify-between bg-white p-4 rounded-2xl'>
                <div className='flexCenter mb-2 middle:mb-0 gap-4'>
                    <div className='bg-stone-100 border-1 border-solid border-stone-300 rounded-sm hover:bg-orange-600 transition-original hover:text-zinc-50'>
                        <SVGPaginationLeft width='36px' height='36px'/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='shrink-0 hidden sx:block'>
                            <img src="/images/BlogDetail/blog post/blog-prev.png" className='rounded-sm size-16' alt="blog post" />
                        </div>
                        <div className='sm:flex justify-center flex-row sm:items-center middle:items-start middle:flex-col hover:text-orange-600 transition-original'>
                            <span>Experience Cinema at Home: Top</span>
                            <span> 4K TVs to Buy in 2024</span>
                        </div>
                    </div>
                </div>
                <div className='flexCenter  gap-4'>
                   
                    <div className='flex gap-2'>
                      
                        <div className='sm:flex justify-center flex-row sm:items-center middle:items-start middle:flex-col hover:text-orange-600 transition-original'>
                            <span>Headphone Heroes: Elevating Your  </span>
                            <span> Listening Experience</span>
                        </div>
                          <div className='shrink-0 hidden sx:block'>
                            <img src="/images/BlogDetail/blog post/blog-next.png" className='rounded-sm size-16' alt="blog post" />
                        </div>
                    </div>
                     <div className='bg-stone-100 border-1 border-solid border-stone-300 rounded-sm hover:bg-orange-600 transition-original hover:text-zinc-50'>
                        <SVGPaginationRight width='36px' height='36px'/>
                    </div>
                </div>
        
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogDetailPost