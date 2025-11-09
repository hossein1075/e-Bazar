import React from 'react'
import BoxSecItem from '../../main/componentsMain/About/BoxSecItem/BoxSecItem'
import information from '../../../informationBoxAbout'
function BoxSec() {
    return (
        <>
            <section className='py-12'>
                <div className="container">
                    <div>
                        <h2 className='text-center sm:text-start text-5xl md:text-6xl lg:text-80px tracking-tightest  font-RobotoSerif-Regular mb-8 md:mb-12'>Why Chose Us?</h2>
                   <div className='flex flex-wrap xl:flex-nowrap gap-5 justify-center xl:justify-between'>
                     {information.map(item => (
                    <BoxSecItem 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    />
                    ))}
                   </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BoxSec