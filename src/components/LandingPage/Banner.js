


import React, {  useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Context } from "../../Context";
import RentalMarketplaceApp from "../Project/RentalMarketplaceApp";
import styledComponents from "styled-components";
import EmailTemplate from "../Project/EmailTemplate";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};


const Banner = () => {
  useEffect(() => {
  }, [])
  return (
    <motion.div className='banner' variants={banner} style = {{
      display: "flex", alignItems: "center",
      height: "calc(100vh - 100px)",

    }}>
      <motion.div className="left" initial= {{x: -300, opacity: 0}} animate = {{ x: 0, opacity: 1, transition: {duration: 1} }}>
        <div className="banner-row">
          <div className="row-letter small">
            Hi, I'm 
          </div>
        </div>
        {/* <BannerRowTop title={"Hi"} num = {1} size = "big"/> */}
        <BannerRowTop title={"yugesh thippana"} num = {1}/>
        <BannerRowTop title={"fullstack developer"} num = {2}/>
        <div className="banner-row">
          <div className="row-letter">
           <div className="text-carousal-title"></div>
          </div>
        </div>
        <div className="banner-row">
          <div className="row-letter small" style= {{whiteSpace: "pre-wrap", paddingTop: "30px"}}>
            I create beautiful websites users will love!
          </div>
        </div>
      </motion.div>

      <div className="right">
       <BannerRight />
      </div>

    
    </motion.div>
  );
};

const BannerRight = () => {
  const { white } = useContext(Context)
  return (
    <div style = {{display: "flex", justifyContent: "flex-end"}} className = "banner-right-scroll">
      <motion.div initial= {{x: 300, opacity: 0}} animate = {{x: 0, opacity:1, transition: {duration: 1}}} className="banner-right-scroll">
        <StyledBannerRight className = "banner-right-scroll" style = {{ border: "2px solid " + white, 
          width: "450px",
          height: "calc(100vh - 250px)",
          maxHeight: "600px", 
          overflowY: "auto" ,
          marginRight: 0,
          padding: "0px 20px"
        }}>
          <RentalMarketplaceApp />
          <EmailTemplate />
        </StyledBannerRight>

      </motion.div>
    </div>
  )
}


const BannerRowTop = ({ title, num, size }) => {
  return (
    <div className={"banner-row banner-row" + num}>
      <div className='row-col'>
        <div className="row-letter"> {title}</div>
        {/* <AnimatedLetters title={title} size = {size}/> */}
      </div>
    </div>
  );
};

const StyledBannerRight = styledComponents.div`
  .maintext {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    padding: 25px 0;
    display: none;
  }

  .text {
    text-align: left;
    font-size: 1rem;
    padding: 15px 0;
  }

  img {
    max-width: 100%;
    height: auto;
    padding: 20px 0;
  }

  .divide {
    display: flex;
    justify-content: space-between;
  }
  .divide img {
    max-width: 48%;
  }
`

export default Banner;

