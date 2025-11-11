import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Translate } from '@mui/icons-material';
function PrevArrow( {className, onClick}) {


  return (

   <div
   className={className}
   onClick={onClick}
   style={{
     display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     background: 'white',
        borderRadius: '8px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 6px rgba(0,0,0,0.15)',
        position: 'absolute',
        left: '-85px',
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