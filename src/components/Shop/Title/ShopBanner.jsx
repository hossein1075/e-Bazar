import React from 'react'

function ShopBanner({title}) {
  return (
    <>
    <section className='mt-20 md:mt-25 pt-20 md:pt-25 md:bg-[url(/images/Shop/banner.png)] bg-bottom bg-no-repeat bg-cover xl:h-75'>
        <div className="container">
            <div>
                <h1 className='font-bold font-RobotoSerif-Bold text-6xl sm:text-80px leading-[120%] tracking-tightest'>{title}</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopBanner