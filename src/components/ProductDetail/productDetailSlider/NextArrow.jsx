import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function NextArrow({ className, onClick }) {

   const [arrowSlide, setArrowSlide] = useState(window.innerWidth >= 1024)


   useEffect(()=> {
    const handleSize = () => setArrowSlide(window.innerWidth >= 1024)

    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
   },[])
   if(!arrowSlide) return null

    const size = arrowSlide < 1600 ? 40 : 50; // width/height
  const offset = arrowSlide < 1600 ? -60 : -85; // right offset

  return (
    <div
      className={`${className} arrow-btn`}
      onClick={onClick}
      style={{
        background: 'white',
        borderRadius: '8px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 6px rgba(0,0,0,0.15)',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
      }}
    >
      <ArrowForwardIosIcon sx={{ color: '#000', fontSize: 28 }} />
    </div>
  )
}

export default NextArrow