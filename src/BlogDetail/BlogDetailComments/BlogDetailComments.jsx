import React from 'react'
import { ImQuotesRight } from "react-icons/im";
function BlogDetailComments() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='bg-white mb-4 p-4 rounded-2xl'>
                        <div className='mb-4 leading-[150%] tracking-tightest4'>
                            <span>24 Aug, 2024</span>
                            <span>/</span>
                            <span> 02 Comments</span>
                        </div>
                        <div>
                            <h4 className='mb-4 font-Lato-Bold font-bold text-zinc-900 text-2xl'>Fun and Safe Outdoor Toys for Active Kids: Keep Them Engaged and Healthy</h4>
                            <p className='mb-6'>
                                As parents, we all want our children to be active, healthy, and happy. In today's digital age,
                                it's more important than ever to encourage outdoor play, where kids can explore, run, jump,
                                and develop their physical and social skills. Outdoor toys are a fantastic way to keep kids engaged,
                                entertained, and most importantly, safe while they enjoy the fresh air.
                                In this blog, we'll explore some of the best outdoor toys that combine fun with safety,
                                ensuring your little ones stay active and healthy.
                            </p>
                            <div className='p-4 mb-6 bg-[url(/images/BlogDetail/blog-bg.png)] bg-center bg-no-repeat bg-cover rounded-10px'>
                                <div className='mb-6 text-3xl'>
                                    <span>
                                        <ImQuotesRight  className='text-white/50' size={45}/>
                                    </span>
                                </div>
                                <p className='text-zinc-50 mb-6'>
                                    Lorem ipsum dolor sit amet consectetur. Nullam in quis pharetra pellentesque faucibus.
                                    Sit id rhoncus sodales ultrices mauris egestas mauris.
                                    Aliquam in nulla rutrum erat consectetur est netus quam.
                                </p>
                                <h5 className='text-zinc-50 mb-6'>Emma Grace</h5>
                            </div>
                        </div>
                        <h6 className='mb-5 font-Lato-Bold font-bold'>1. Ride-On Toys</h6>
                        <p className='leading-[150%] tracking-tightest4 mb-6'>Outdoor play is crucial for a child's overall development. It helps improve physical strength,
                            coordination, and balance while also promoting mental well-being.
                            Kids who play outside regularly are more likely to develop strong social skills and a love for nature. Additionally,
                            outdoor play reduces screen time, helping to improve sleep patterns and reduce the risk of obesity.
                            With the right toys, outdoor play can be both fun and safe.
                        </p>
                        <div className='flex gap-6 justify-center mb-6'>
                            <div className='w-full'>
                                <img src="/images/BlogDetail/blog-detail-2.png" className='w-full rounded-10px' alt="BlogDetailComments" />
                            </div>
                            <div className='w-full'>
                                <img src="/images/BlogDetail/blog-detail-3.png" className='w-full rounded-10px' alt="BlogDetailComments" />
                            </div>
                        </div>
                        <h6 className='mb-5 font-Lato-Bold font-bold'>2. A Complex Genius</h6>
                        <p className='leading-[150%] tracking-tightest4 mb-6'>Outdoor play is crucial for a child's overall development. It helps improve physical strength,
                            coordination, and balance while also promoting mental well-being.
                            Kids who play outside regularly are more likely to develop strong social skills and a love for nature. Additionally,
                            outdoor play reduces screen time, helping to improve sleep patterns and reduce the risk of obesity.
                            With the right toys, outdoor play can be both fun and safe.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailComments