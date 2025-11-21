import React from 'react'
import './Banner.css'
import BtnOrigin from '../../componentsMain/BtnOrigin/BtnOrigin'
import InfoBtnOrigin from '../../componentsMain/BtnOrigin/InfoBtnOrigin'
import Typewriter from 'typewriter-effect';
function Banner() {
    return (
        <>
            <section className='md:bg-[url(/images/hero-banner.png)] bg-center bg-no-repeat bg-cover xl::h-235'>
                <div className="container">
                    <div className='mb-10 sm:mb-0'>
                        <h5 className='text-3xl sm:text-[35px] md:text-4x-l-5 xl:text-[47px] font-Lato-Bold font-bold tracking-tightest2 text-zinc-800 mb-2'>
                            YOUR
                            </h5>
                        <h2 className='text-[45px] sm:text-[50px] md:text-[65px] xl:text-[80px] font-Lato-Bold font-bold tracking-tightest text-zinc-800 mb-4'>
                             <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 75, 
                                    strings: [' ONE STOP SHOP'], 
                                }}
                            />
                           </h2>
                        <p className='tracking-[0.03rem] mb-5 relative sm:p_after max-w-150'>E-Bazar is your one-stop shop for all your grocery needs. We have
                            a wide selection of fresh produce, meats, seafood, dairy, and
                            baked goods, all at affordable prices. Plus, we offer free delivery.
                        </p>
                        <div className='mt-12 text-center md:text-right md:max-w-230'>
                            <BtnOrigin text={InfoBtnOrigin[0].info} />
                        </div>
                    </div>
                    <div className='hidden sm:block'>
                        <img src="/images/object-1.png" alt="banner" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner