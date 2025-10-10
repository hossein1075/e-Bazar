import React from 'react'
import './Banner.css'
import BtnOrigin from '../../componentsMain/BtnOrigin/BtnOrigin'
function Banner() {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <h5 className='text-3xl sm:text-[35px] md:text-[42px] xl:text-[47px] font-Lato-Bold font-bold tracking-[-0.03rem] text-zinc-800 mb-2'>YOUR</h5>
                        <h2 className='text-[45px] sm:text-[50px] md:text-[65px] xl:text-[80px] font-Lato-Bold font-bold tracking-[-0.04rem] text-zinc-800 mb-4'>ONE STOP SHOP</h2>
                        <p className='tracking-[0.03rem] mb-5 relative p_after max-w-150'>E-Bazar is your one-stop shop for all your grocery needs. We have
                            a wide selection of fresh produce, meats, seafood, dairy, and
                            baked goods, all at affordable prices. Plus, we offer free delivery.
                        </p>
                        <div className='mt-12 text-right max-w-290'>
                            <BtnOrigin/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner