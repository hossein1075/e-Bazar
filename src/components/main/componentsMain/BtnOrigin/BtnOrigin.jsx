import React from 'react'
import './BtnOrigin.css'
function BtnOrigin({text}) {
    return (
        <>
                <button className='bg-orange-600 py-2.5 md:py-3 px-6 md:px-8 rounded-[15px] font-bold text-xl text-zinc-50 cursor-pointer btn_after'>
                    <a href="#">{text}</a>
                </button>
        </>
    )
}

export default BtnOrigin