import React, { useContext, useRef } from 'react'
import styledComponents from 'styled-components'
import SocialIcons from './SocialIcons'
import {Context} from "../../Context"
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const {primary, bg, setAlert} = useContext(Context)
  const ref = useRef()
  const submitForm = (e) => {
    e.preventDefault()

    if(!/\S+@\S+\.\S+/.test(e.target[2].value)) setAlert("Enter a valid email address")
    
    emailjs.sendForm('service_0qqqe5a', 'template_vmfq8v7', ref.current, 'XCCHp2PppiAIBXYUG')
    .then((result) => {
        console.log("res",result.text);
        setAlert("Message sent!")
    }, (error) => {
        console.log("err1",error.text);
        setAlert("Unable to send emails now. please try later sometime.")
    });

    emailjs.sendForm('service_0qqqe5a', 'template_d34e7c9', ref.current, 'XCCHp2PppiAIBXYUG')
    .then((result) => {
        console.log("res",result.text);
        setAlert("Message sent!")
    }, (error) => {
        console.log("err2",error.text);
        setAlert("Unable to send emails now. please try later sometime.")
    });
  }

  return (
    <StyledRoot id = "contact-form">
      <div class="background">
        <div class="shape"></div>
      </div>

      <form onSubmit = {submitForm} ref = {ref}>
        <h3>Stay in touch</h3>

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
          <label for="name" class="form__label">Name</label>
        </div>

        <div class="form__group field">
          <textarea 
            type="input" 
            class="form__field" 
            placeholder="Name" 
            name="message" 
            id='message' 
            rows="6" cols="50"
            style = {{resize: "none"}}
            required />
          <label for="message" class="form__label">Message</label>
        </div>

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="email" id='email' required />
          <label for="email" class="form__label">Email</label>
        </div>

        {/* <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" /> */}

        <button type = "submit" style = {{
          color: primary,
          background: bg,
        }}>Send Message</button>
       <SocialIcons />
      </form>
    </StyledRoot>
  )
}

const StyledRoot = styledComponents.div`
  position: relative;
  width: 100vw;
  height: 900px;

  .background{
    width: 600px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 53%;
    top: 57%;
  }
  .background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
  }
  .shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -30px;
    bottom: -80px;
  }
  form{
    height: 650px;
    width: 600px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
  }
  form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  form h3{
    font-size: 45px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }

  ::placeholder{
    color: #e5e5e5;
  }
  button{
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  .social{
  margin-top: 30px;
  display: flex;
  }
  .social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
  }
  .social div:hover{
  background-color: rgba(255,255,255,0.47);
  }
  .social .fb{
  margin-left: 25px;
  }
  .social i{
  margin-right: 4px;
  }

  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    overflow: hidden;
    // width: 50%;
  }
  
  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  
    &::placeholder {
      color: transparent;
    }
  
    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }
  

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }
  
  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight:700;    
    }
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e,#38ef7d);
    border-image-slice: 1;
  }
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
`