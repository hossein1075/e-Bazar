import React, { useEffect } from 'react'
import Lenis from 'lenis'
function SmoothScroll({children}) {
useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true, 
      lerp: 0.6,     
      smooth: true,
      duration: 1.6,
      smoothTouch: true
    });

    // لیسنر اسکرول
    lenis.on("scroll", (e) => {
    //   console.log("Lenis Scroll Event:", e);
    });

    return () => {
      lenis.destroy(); 
    };
  }, []);
 return <>{children}</>;
}

export default SmoothScroll