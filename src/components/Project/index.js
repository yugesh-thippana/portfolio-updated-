import { useContext, useEffect, useMemo } from 'react'
import ReactDOM from "react-dom"
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom'
import  isStyledComponent  from 'styled-components'
import { Context } from '../../Context'
import "./index.scss"
import RentalMarketplaceApp from './RentalMarketplaceApp'
import JoinAssembly from './JoinAssembly'
import EmailTemplate from "./EmailTemplate"
import CustomBurger from './CustomBurger'

export default function Project() {
  const {project} = useParams()
  const {primary} = useContext(Context)
  let navigate = useNavigate();

  const comp = useMemo(() => {
    if(project === "rental-marketplace") return <RentalMarketplaceApp />
    if(project === "admin-panel-hoodies") return <JoinAssembly />
    if(project === "email-template-engine") return <EmailTemplate />
    if(project === "burger-builder") return <CustomBurger />
  }, [project])

  useEffect(() => {
    if(!comp)  navigate("/")
    window.scrollTo(0,0);
    /* eslint-disable */
  }, [])
  /* eslint-enable */


  return (
    <StyledRoot>
      {
        ReactDOM.createPortal(
          <StyledBack primary = {primary}>
            <Link to = "/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
            </Link>
          </StyledBack> ,
          document.querySelector("#back-button")
        )
      }
      <div className='logo' style = {{ position: "absolute", top: "35px", right: "40px", fontFamily: "'Poppins', sans-serif" }}>WW.</div>
      
      <div style = {{border: "2px solid " + primary }}></div>

      <div style = {{
        overflowX: "hidden",
        paddingTop: "50px",
      }} className = "project-description">
        {comp}
      </div>
    </StyledRoot>
  )
}

const StyledRoot = isStyledComponent.div`
  font-family: luzia;
  position: relative;
  padding: 120px; 
  padding-top: 150px;
`
const StyledBack = isStyledComponent.div`
  width: 60px;
  height: 60px;
  padding: 5px;
  z-index: 10;

  position: fixed;
  top: 35px;
  left: 30px;
  
  &:active {
    background:rgba(255, 255, 255, 0.305);
    border-radius: 5px;
  }

  svg {
    fill: ${props => props.primary};
  }
`