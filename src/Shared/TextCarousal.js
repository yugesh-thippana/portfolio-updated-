import React, { useEffect, useState } from 'react'
import styled from "styled-components"

export default function TextCarousal(props) {
  const { textArray, dataPeriod = 2000, style } = props;
  const [activeState, setActiveState]  = useState("")

  class TxtRotate {
    constructor(toRotate, period) {
        this.toRotate = toRotate;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        console.log({fullTxt})
        console.log(fullTxt.substring(0, this.txt.length - 1), fullTxt.substring(0, this.txt.length + 1))

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        console.log({s: this.setState})
        setActiveState(this.txt);

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}

  useEffect(() => {
      console.log({setActiveState})
    new TxtRotate(textArray, dataPeriod)
  }, [])

  return textArray && (
    <span class="txt-rotate">
        <StyledWrap style = {style}> {activeState} </StyledWrap>
    </span>
  )
}

const StyledWrap = styled.span`
    font-size: inherit;
    border-right: 0.08em solid #666;
`

