import React from 'react'
import { Link } from 'react-router-dom'
function BlogDetailPoint() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='bg-white p-4 rounded-xl mb-6'>
                        <h5 className='mb-8 font-Lato-Bold font-bold text-zinc-900'>3 Comments</h5>

                        <div className='sm:flex gap-3 mb-6'>
                            <div className='shrink-0 mb-2 sm:mb-0'>
                                <img src="/images/slider/Image-1.png" className='rounded-md size-13.75' alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-2 leading-[150%] tracking-tightest4 text-xs'>24 Aug, 2024</span>
                                <span className='font-bold font-RobotoSerif-Bold text-zinc-900 mb-5'>Stephen Robert</span>
                                <p className='mb-2 leading-[150%] tracking-tightest4'>
                                    Lorem ipsum dolor sit amet consectetur. Lectus massa massa et nisl ornare amet sed.
                                    Venenatis egestas massa pharetra nunc quam urna donec in. Quis non a tincidunt tortor commodo.
                                    Tristique facilisi sapien est elementum fringilla dignissim.
                                </p>
                                <Link to='#' className='hover:text-orange-600 transition-original'>Reply</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailPoint