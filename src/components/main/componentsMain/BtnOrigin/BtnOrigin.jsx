import React from 'react'
import './BtnOrigin.css'
import { Link } from 'react-router-dom'
function BtnOrigin({text, className='', onClick, to}) {
    return (
        <>
                <button onClick={onClick} className={`bg-orange-600 py-2.5 md:py-3 px-6 md:px-8 rounded-[15px] font-bold font-Lato-Bold text-xl text-zinc-50 cursor-pointer btn_after ${className}`}>
                    <Link to={to}>{text}</Link>
                </button>
        </>
    )
}

export default BtnOrigin