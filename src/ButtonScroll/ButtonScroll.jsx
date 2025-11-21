import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleUp } from "react-icons/fa";


function ButtonScroll() {
    const [visibleScroll, setVisibleScroll] = useState(false)

    useEffect(() => {

        const scrollHandler = () => {
            if (window.scrollY > 200) {
                setVisibleScroll(true)
            } else {
                setVisibleScroll(false)
            }
        }

        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }
    return (
        <>
            {visibleScroll && (
                <Link to='#' onClick={scrollTop} className='fixed bottom-8 right-10 bg-orange-600 text-zinc-50 p-2.5 text-center rounded-full'>
                    <FaAngleUp size={30} />
                </Link>
            )}
        </>
    )
}

export default ButtonScroll