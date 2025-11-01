import React, { useEffect, useState } from 'react'

function BannerOff() {
    
    const initialEndDate = () => {
        let periodTime = new Date()
        periodTime.setDate(periodTime.getDate() + 20)
        
        return periodTime
        
    }
    const [endDate, setEndDate] = useState(initialEndDate)
    
    const estimateTime = () => {
        const timeGeneral = +endDate - +new Date()
        
        return {
            d: timeGeneral > 0 ? Math.floor(timeGeneral / (1000 * 60 * 60 * 24)) : 0,
            h: timeGeneral > 0 ? Math.floor(timeGeneral / (1000 * 60 * 60) % 24) : 0,
            m: timeGeneral > 0 ? Math.floor(timeGeneral / (1000 * 60) % 60) : 0,
            s: timeGeneral > 0 ? Math.floor(timeGeneral / 1000 % (60)) : 0,
            done: timeGeneral <= 0
        }
    }
    
    const [timeLeft, setTimeLeft] = useState(estimateTime())

    useEffect(()=> {
        const timer = setInterval(() => {
            
            const finalValue = estimateTime()

            if(finalValue.done) {
                let newDate = new Date()
                newDate.setDate(newDate.getDate() + 20)
                setEndDate(newDate)
            } else {
                setTimeLeft(finalValue)
            }
        }, 1000);


        return () => clearInterval(timer)

    }, [endDate])

    
  return (
    <>
    <section className='flex items-center sm:bg-[url(/images/banner-bg.png)] bg-[position:top_right] bg-no-repeat bg-size-cover bg-white md:bg-transparent pt-8 pl-6 pb-12 md:pb-0 md:pt-0 md:pl-0 sm:h-137.5 lg::h-175'>
        <div className="container flex flex-col items-start xl:items-end md:items-center">
            <div className='flex flex-col'>
                <h5 className='font-bold font-Lato-Bold text-xl sm:text-3xl md:text-5xl tracking-tightest2 text-orange-600 mb-4'>Dry Fruits</h5>
                <h2 className='font-bold font-Lato-Bold text-5xl sm:text-6xl md:text-80px tracking-tightest mb-12'>BACK IN STOCK</h2>
                <ul className='flex items-center gap-4 sm:gap-6 flex-wrap'>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        {timeLeft.d}
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>d</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        {timeLeft.h}
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>h</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        {timeLeft.m}
                        <span className='text-orange-600 font-light ml-1.5 text-sm md:text-xl'>m</span>
                    </li>
                    <li className='bg-zinc-50 tracking-tightest3 md:p-2 p-1.5 shadow-sub font-bold text-xl sm:text-2xl md:text-27px rounded-2xl'>
                        {timeLeft.s}
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