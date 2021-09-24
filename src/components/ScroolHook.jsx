import React, { useEffect, useState } from 'react'

const ScroolHook = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("update phase")
    
    const detectScroll = () => setScrollY(window.pageYOffset)

    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll",detectScroll);
    }
  },[scrollY])

  return (
    <>
      <h2>Hooks - useEffect</h2>
      <p>Sroll Y del navevador {scrollY}px</p>
    </>
  )
}

export default ScroolHook;
