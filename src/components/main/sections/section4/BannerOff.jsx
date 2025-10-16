import React from 'react'

function BannerOff() {
  return (
    <>
    <section className='flex items-center sm:bg-[url(/images/banner-bg.png)] bg-[position:top_right] bg-no-repeat bg-size-cover bg-white md:bg-transparent pt-8 pl-6 pb-12 md:pb-0 md:pt-0 md:pl-0 sm:h-137.5 lg::h-175'>
        <div className="container flex flex-col items-start lg:items-center">
            <div className='flex flex-col '>
                <h5 className='font-bold text-xl sm:text-3xl md:text-5xl tracking-tightest2 text-orange-600 mb-4'>Dry Fruits</h5>
                <h2 className='font-bold text-5xl sm:text-6xl md:text-80px tracking-tightest mb-12'>BACK IN STOCK</h2>
                <ul className='flex items-center gap-4 sm:gap-6 flex-wrap'>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        03
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>d</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        03
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>m</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        03
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>h</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        03
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>s</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default BannerOff