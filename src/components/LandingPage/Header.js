import React, { useCallback, useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../../Context";
import styledComponents from "styled-components";

const Header = () => {
  const { primary } = useContext(Context)

  const scrollIntro = useCallback((id) => {
    document.querySelector("#butter").style.position = "relative";
    document.querySelector(id).scrollIntoView({scroll: "smooth"})
    setTimeout(() => {
      document.querySelector("#butter").style.position = "fixed";
    });
  }, [])

  return (
    <>
      <div className='logo' 
        style = {{ position: "absolute", top: "35px", left: "40px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      >WW.</div>

      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        className='header'>
        <div className='header-inner'>
          
          <nav className='nav'>
            <div  onClick = {() => scrollIntro("body")}>
              <Link primary = {primary}>Home</Link>
            </div>
            <div onClick = {() => scrollIntro("#projects-main")}>
              <Link primary = {primary} >Projects </Link>
            </div>
            <div onClick = {() => scrollIntro("#about")}>
              <Link primary = {primary} >About</Link>
            </div>
            <div onClick={() => scrollIntro("#contact-form")}>
              <Link primary = {primary} >Contact</Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

const Link = styledComponents.div`
  color : ${props => props.primary};
  position: relative;

  &::before {
    content: "";
    width: 0%;
    height: 5px;
    background: ${props => props.primary};
    position: absolute;
    bottom: -8px;
    left: 0;
    transition: width 0.5s;
  }

  &:hover::before {
    width: 100%;
  }
`


export default Header;