import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function NextArrow( {className, onClick}) {

  return (
 <div
      className={className}
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
        right: '-85px',
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