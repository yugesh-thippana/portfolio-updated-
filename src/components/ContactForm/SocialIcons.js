import React, { useContext } from 'react'
import styled from "styled-components"
import { Context } from '../../Context'

export default function SocialIcons() {
   const {setAlert} = useContext(Context)
   const copyEmail = () => {
      const copyText = "yugesh@wisersweb.com"
      document.addEventListener('copy', function(e) {
         e.clipboardData.setData('text/plain', copyText);
         e.preventDefault();
      }, true);
   
      document.execCommand('copy');  
      setAlert("Email copied")
   }

  return (
    <StyledRoot id = "social-icons">
         <div class="wrapper">
         <div class="button" style = {{display: "flex", flexWrap: "wrap"}} onClick= {copyEmail}>
            <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
            </div>
            <span>Email</span>
         </div>
         <div class="button" style = {{display: "flex", flexWrap: "wrap"}} onClick = {() => window.open("https://www.linkedin.com/in/yugesh-thippana/", "_blank")}>
            <div class="icon">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
               </span>
            </div>
            <span>Linkedin</span>
         </div>
         <div class="button" style = {{display: "flex", flexWrap: "wrap"}} onClick = {() => window.open("https://github.com/yugesh-thippana", "_blank")}>
            <div class="icon" >
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
               </span>
            </div>
            <span> Github</span>
         </div>
         <div class="button" style = {{display: "flex", flexWrap: "wrap"}} onClick = {() => window.open("https://www.facebook.com/profile.php?id=100017427514498", "_blank")}>
            <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </div>
            <span>Facebook</span>
         </div>
      </div>
   
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
    /* background: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%); */
    font-family: "Poppins", sans-serif;
    /* padding-left: 50px; */

    .button > span {
       padding-left: 10px;
    }
    .button {
       position: relative;
       display: flex;
       flex-wrap: wrap;
    }
    .wrapper {
       height: 100%;
       display: flex;
       justify-content: center;
       gap: 20px;
       margin-top: 30px;
    }

    .wrapper .button:active {
       /* box-shadow: 5px 5px 25px black; */
       transform: scale(0.96);
    }

    .wrapper .button{
        display: inline-block;
        height: 60px;
        width: 60px;
        float: left;
        margin: 0 5px;
        overflow: hidden;
        background: #fff;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease-out;
        }
        .wrapper .button:hover{
        width: 200px;
        }
        .wrapper .button .icon{
        display: inline-block;
        height: 60px;
        width: 60px;
        text-align: center;
        border-radius: 50px;
        box-sizing: border-box;
        line-height: 60px;
        transition: width 0.3s ease-out;

        display: grid;
        place-items: center;
        }
        .icon {
           margin: 0;
        }
        .wrapper .button .icon svg {
           width: 80%;
           height: 80%;
           border-radius: 100px;
        }
        .wrapper .button:nth-child(1):hover .icon{
        fill: #1DA1F2;
        }
        .wrapper .button:nth-child(2):hover .icon{
        fill: #0072b1;
        }
        .wrapper .button:nth-child(3):hover .icon{
        fill: #6cc644;
        }
        .wrapper .button:nth-child(4):hover .icon{
        fill: #4267B2;
        }
        .wrapper .button .icon svg{
        font-size: 25px;
        line-height: 60px;
        transition: all 0.2s ease-in;
        }
        .wrapper .button .icon span{
        color: #fff;
        }
        .wrapper .button span{
        font-size: 20px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        /* line-height: 60px; */
        /* transition: all 0.3s ease-out; */
        }
        .wrapper .button:nth-child(1) span{
        color: #4267B2;
        }
        .wrapper .button:nth-child(2) span{
        color: #1DA1F2;
        }
        .wrapper .button:nth-child(3) span{
        color: #E1306C;
        }
        .wrapper .button:nth-child(4) span{
        color: #333;
        }
        .wrapper .button:nth-child(5) span{
        color: #ff0000;
        }

        .wrapper {
        display: flex;
    }
`