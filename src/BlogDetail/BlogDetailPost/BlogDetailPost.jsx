import React from 'react'
import SVGPaginationLeft from '../../components/main/componentsMain/SVGPagination/SVGPaginationLeft'
import SVGPaginationRight from '../../components/main/componentsMain/SVGPagination/SVGPaginationRight'

function BlogDetailPost() {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <div>
                    <div>
                        <SVGPaginationLeft/>
                    </div>
                    <div>
                        <div>
                            <img src="/images/BlogDetail/blog post/blog-prev.png" alt="blog post" />
                        </div>
                        <div>
                            <span>Experience Cinema at Home: Top</span>
                            <span> 4K TVs to Buy in 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <SVGPaginationRight/>
                    </div>
                    <div>
                        <div>
                            <img src="/images/BlogDetail/blog post/blog-next.png" alt="blog post" />
                        </div>
                        <div>
                            <span>Headphone Heroes: Elevating Your  </span>
                            <span> Listening Experience</span>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogDetailPost