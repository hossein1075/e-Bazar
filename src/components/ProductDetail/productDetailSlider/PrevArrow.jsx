import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Translate } from '@mui/icons-material';
function PrevArrow( {className, onClick}) {

  const [arrowSlide , setArrowSlide] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handlesSize = () => setArrowSlide(window.innerWidth >= 1024)
    window.addEventListener('resize', handlesSize)
    return () => window.removeEventListener('resize', handlesSize)
  }, [])

  if(!arrowSlide) return null


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
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
   }}
   >

    <ArrowBackIosNewIcon sx={{ color: '#000', fontSize: 28 }} />
   </div>
  )
}

export default PrevArrow