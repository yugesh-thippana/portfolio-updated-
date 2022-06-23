import React, {memo, useRef, useState, useContext, useEffect, useCallback} from "react"
import  ReactDOM  from "react-dom";
import styled from "styled-components"
import LandingPage from "./components/LandingPage"
import { Context } from "./Context";
import Projects from "./components/Projects"
import LoadingComponent from "./components/LoadingComponent";
// import HamBurgerMenu from "./components/HamBurgerMenu"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Project from "./components/Project";
import ScrollTrigger from "react-scroll-trigger"
import Butter from "./butter.js-master/src/butter"
import arrowRight from "./icons/arrow-right-thin.svg"
import ContactForm from "./components/ContactForm"
import About from "./components/About"
import Alert from "./components/Alert";
import gsap from "gsap";

const rollNormalText = "View All Projects -   View All Projects -  "
const scrollDownText = "Click to projects -  Click to projects -  "
const rollAboutText = "About - About - About - About - About - "
const rollContactText = "Stay in touch  - S tay in touch  - Em ail - "

const MainApp = ({setMenuEnabled}) =>{
  const mainScrollRef = useRef()
  const rotateTextRef = useRef()
  const [extra, setExtra] = useState(0)
  const {bg} = useContext(Context)
  const [scrollText, setScrollText] = useState("")
  const rollText = useCallback(() => {
    let rrr = scrollText.split("").map(
      (char,i)=> <span style={{transform:`rotate(${(i+extra)*8.2}deg)`}}>{char}</span>)
      return rrr
  }, [extra, scrollText])
  
    const bottomScrollTextChange = useCallback(() => {
      if(window.scrollY < 40) {
        if(scrollText!== scrollDownText)
        setScrollText(scrollDownText)
        return
      }
      else if(window.scrollY > 40 && window.scrollY < 1666) {
        if(scrollText!== rollNormalText)
        setScrollText(rollNormalText)
        return
      }
      else if (window.scrollY > 1666 && window.scrollY < 2280) {
        if(scrollText!== rollAboutText)
        setScrollText(rollAboutText)
        return
      }
      else {
        if(scrollText!== rollContactText)
        setScrollText(rollContactText)
        return
      }
    }, [scrollText])
  
  useEffect(()=> {
    gsap.fromTo("#butter", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1.5
    })

    const butter = new Butter()
    butter.init({cancelOnTouch: true});

    window.addEventListener("scroll", bottomScrollTextChange)
    return () => window.removeEventListener("scroll", bottomScrollTextChange)
    /* eslint-disable */
  }, [])
  /* eslint-enable */

  const rotateRight = () => {
    setExtra((prev => prev + 0.5))
  }

  return(
    <div id = "butter" className="banner-right-scroll">
      <Routes>
        <Route path="/" element = {
          <> 
            <ScrollTrigger onProgress={() => {
              console.log("vellaman", window.pageYOffset)
              if( window.pageYOffset > 100) {
                setMenuEnabled(true)
              } else {
                setMenuEnabled(false)
              }
            }}
            >
              <div ref = {mainScrollRef}>
                <LandingPage />
                <Projects />

                {ReactDOM.createPortal(
                   <ScrollTrigger 
                   className="circle" 
                   onEnter={rotateRight} 
                   onProgress = {rotateRight}
                   throttleScroll = {30}
                   style = {{fontFamily: "luzia"}}
                  >
                     <div className="arrow">
                         <img src = {arrowRight} alt = "+"/>
                     </div>
                     <div className="text" style = {{color: bg}} ref = {rotateTextRef}> {rollText(scrollText)} </div>
                  </ScrollTrigger> ,
                  document.querySelector("#fixed-scroll-wheel")
                )}
                <About />
                <ContactForm />
              </div>
            </ScrollTrigger>
        </>
      } />

        <Route path = "/projects/:project" element = {<Project />} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>

    </div>
)}
const MainAppMemo = memo(MainApp)

function App() {
  const {bg, primary} = useContext(Context)
  const [loading, setLoading] = useState(true) 
  // eslint-disable-next-line
  const [ menuEnabled, setMenuEnabled] = useState(false)
  const appRef = useRef()


  return (
    <StyledRoot className="App banner-right-scroll" bg = {bg} primary = {primary} ref = {appRef} >
      {
        loading ? 
          <LoadingComponent setLoading = {setLoading}/> :
          <Router>
            {/* {menuEnabled && ReactDOM.createPortal(<HamBurgerMenu />, document.querySelector("#fixed-menu"))} */}
            <MainAppMemo setMenuEnabled={setMenuEnabled}/> 
            <Alert />
          </Router>
      }

    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  min-height: 100vh;
  user-select: none;
  background-color: ${props => props.bg};
  color: ${props => props.primary};
`

export default memo(App) ;
