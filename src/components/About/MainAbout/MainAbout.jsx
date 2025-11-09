import React from 'react'

function MainAbout() {
    return (
        <>
            <section className='pt-12 sm:pt-17.5 middle:pt-24 pb-6 sm:pb-8 middle:pb-12'>
                <div className="container flex flex-col xl:flex-row justify-center items-center">
                    <div className='flex flex-col xl:flex-row gap-2 max-w-180 xl:max-w-full'>
                        <div className='basis-[50%]'>
                            <h3 className='mb-4 text-3xl sm:text-5xl leading-[120%] tracking-tightest2 font-RobotoSerif-Regular'>Welcome to E-Bazar</h3>
                            <p className='mb-4 leading-[150%] tracking-tightest4 text-base'>
                                At E-Bazar, we are passionate about providing you with the freshest and highest quality groceries. Our mission is to make your shopping experience convenient,
                                enjoyable, and satisfying. With a wide selection of locally sourced produce, pantry staples, and specialty items,
                                we strive to meet all your grocery needs under one roof.
                            </p>
                            <p className='mb-12 leading-[150%] tracking-tightest4 text-base'>
                                We believe in building strong relationships with local farmers and suppliers, ensuring that our products are fresh,
                                sustainable, and ethically sourced. Our knowledgeable and friendly staff is dedicated to assisting you in finding the best ingredients for your recipes,
                                answering your questions, and providing personalized recommendations.
                            </p>
                            <h3 className='mb-4 text-3xl sm:text-5xl leading-[120%] tracking-tightest2 font-RobotoSerif-Regular'>Our Philosophy</h3>
                            <p className='mb-4 leading-[150%] tracking-tightest4 text-base'>
                                We value your trust and satisfaction.
                                That's why we maintain strict quality control measures to guarantee the freshness and integrity of every item on our shelves.
                                From farm-fresh fruits and vegetables to organic dairy products,
                                from gourmet spices to gluten-free alternatives.
                            </p>
                        </div>
                        <div className='basis-[50%]'>
                            <img src="/images/About/about-1.png" className='xl:h-full xl:w-full shadow-sub rounded-b-3xl border-t-3 border-solid border-orange-600' alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainAbout