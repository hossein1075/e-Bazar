import React, { useEffect } from 'react'
import PaginationBox from '../components/main/componentsMain/PaginateBox/PaginationBox'
import useSWR from 'swr'
import { paginateImgBox } from '../APIimg'
import { HideLoading, ShowError, ShowLoading } from '../ToastAPI'

const fetcher = (url) => fetch(url).then(res => res.json())
function BlogListSec() {
  const { data, error, isLoading} = useSWR('https://info-products-7e7f7-default-rtdb.firebaseio.com/blog.json', fetcher)
 useEffect(() => {
          if(isLoading) {
              ShowLoading()
          } else {
              HideLoading()
          }
  
      }, [isLoading])
      useEffect(() => {
           if(error) {
              ShowError()
          }
  
      }, [error])
  
  const dataBlog = data ? Object.values(data) : []
  console.log(dataBlog);
  
  return (
    <>
      <section className='py-8 sm:py-12'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 middle:grid-cols-3 gap-6 justify-center'>
           {dataBlog.map((item, index) => {
            const ImgBox = paginateImgBox[index % paginateImgBox.length]
            return (
              <PaginationBox 
              title={item.title}
              key={item.id}
              img={ImgBox.img}
              />
            )
           })}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogListSec