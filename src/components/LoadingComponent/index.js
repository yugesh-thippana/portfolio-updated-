import React, { useContext, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styledComponents from 'styled-components'
import "./index.scss"
import { Context } from '../../Context'

export default function LoadingComponent({setLoading}) {
  const bowlRef = useRef()
  const aRef = useRef()
  const {primary} = useContext(Context)

  useLayoutEffect(() => {
    gsap.to(bowlRef.current, {
      delay: 2,
      duration: 1,
      "border": "none",
      "background": "transparent",
    })

    gsap.to(aRef, {
      delay: 2,
      duration: 1,
      "-webkit-text-stroke": "2.5px black",
    })
    
    gsap.timeline()
    .to(".white-whipper", {
      delay: 2,
      top: 0
    })

    gsap.timeline()
    .to(bowlRef.current, {
      delay: 2.1,
      duration: 0.5,
      y: -510
    })

    gsap.timeline()
    .to(".white-whipper", {
      delay: 2.3,
      duration: 1,
      top: -1000
    })
    .call(() => setLoading(false))
    /* eslint-disable */
  }, [])
  /* eslint-enable */


  return (
    <StyledLoader>
      <div class = "white-whipper" style = {{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: "100vh",
        background: primary
      }}>

      </div>
      <div ref = {bowlRef} style = {{ borderRadius: "50%" }}>
        <div className="bowl">
          <div className="liquid">
          <div className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/" ref = {aRef}> <div className = "logo">WW</div></a>
                </div>
          </div>
        </div>
      </div>
    </StyledLoader>
  )
}

const StyledLoader = styledComponents.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
`