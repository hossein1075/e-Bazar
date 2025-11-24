import React from 'react'
import { PuffLoader  } from "react-spinners";
function Loader({loading}) {
  return (

    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAFAFA"
      }}
    >
      <PuffLoader 
        loading={loading}
        size={60}
        speedMultiplier={1.2}
        color='#EC7755'
      />
    </div>
  
  )
}

export default Loader 