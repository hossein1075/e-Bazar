import React from 'react'
import './BtnOrigin.css'
function BtnOrigin({text, className='', onClick}) {
    return (
        <>
                <button onClick={onClick} className={`bg-orange-600 py-2.5 md:py-3 px-6 md:px-8 rounded-[15px] font-bold font-Lato-Bold text-xl text-zinc-50 cursor-pointer btn_after ${className}`}>
                    <a href="#">{text}</a>
                </button>
        </>
    )
}

export default BtnOrigin