
   
import { gsap } from "gsap";
import {  useEffect } from "react";
import { lerp, getSiblings } from "./utils";

// Grab the mouse position and set it to mouse state
// let mouse = { x: 0, y: 0 };
// window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
const useCursor = (el) => {

  useEffect(() => {
    // Variables
    let Cursor = document.querySelector(el);
    Cursor.style.opacity = 0;
    let Item = document.querySelectorAll(".hero-inner-link-item");
    let cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    };

    function onMouseMoveEv ()  {
      cursorConfigs.x.previous = window.x;
      cursorConfigs.y.previous = window.y;
      cursorConfigs.x.current = window.x;

      // Set cursor opacity to 1 when hovered on screen
      gsap.to(Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      // Execute scale function
      onScaleMouse(Cursor, Item);

      // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
      requestAnimationFrame(() => render(cursorConfigs));
      // Clean up function
      window.removeEventListener("mousemove", onMouseMoveEv);
    };
    // Scale cursor animation
    window.addEventListener("mousemove", onMouseMoveEv);
    /* eslint-disable */
  }, [])
  /* eslint-enable */


  function onScaleMouse(Cursor, Item) {
    // Loop through all items
    Item.forEach((link) => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(":hover")) {
        setVideo(link);
        ScaleCursor(Cursor.children[0], 0.8);
      }
      //On mouse enter scale the media-cursor to .8
      link.addEventListener("mouseenter", () => {
        setVideo(link);
        ScaleCursor(Cursor.children[0], 0.8);
      });
      //On mouse enter scale the media-cursor to 0
      link.addEventListener("mouseleave", () => {
        ScaleCursor(Cursor.children[0], 0);
      });
      //Hover on a tag to expand to 1.2
      link.children[1].addEventListener("mouseenter", () => {
        Cursor.classList.add("media-blend");
        ScaleCursor(Cursor.children[0], 1.2);
      });
      // Bring scale back down .8
      link.children[1].addEventListener("mouseleave", () => {
        Cursor.classList.remove("media-blend");
        ScaleCursor(Cursor.children[0], 0.8);
      });
    });
  }

  function setVideo(el) {
    // Grab the data-video-src and make sure it matches the video that should be displayed
    let src = el.getAttribute("data-video-src");
    let video = document.querySelector(`#${src}`);
    let siblings = getSiblings(video);

    if (video.id === src) {
      gsap.set(video, { zIndex: 4, opacity: 1 });
      siblings.forEach((i) => {
        gsap.set(i, { zIndex: 1, opacity: 0 });
      });
    }
  }

  function ScaleCursor(el, amount) {
    if(amount)
    gsap.to(el, {
      duration: 0.6,
      scale: amount,
      ease: "Power3.easeOut",
    });
    else 
    gsap.to(el, {
      duration: 0.6,
      scale: amount,
      ease: "Power3.easeOut",
      "border": "50%"
    });
  }

  function render(cursorConfigs) {
    cursorConfigs.x.current = window.x;
    cursorConfigs.y.current = window.y;
    console.log("mmm", cursorConfigs.y, window.y)
    // lerp
    for (const key in cursorConfigs) {
      // key will be x & y
      // WTF IS LERP?
      // Lerp - A lerp returns the value between two numbers at a specified, decimal midpoint:
      cursorConfigs[key].previous = lerp(
        cursorConfigs[key].previous,
        cursorConfigs[key].current,
        cursorConfigs[key].amt
      );
    }
    console.log("x", document.querySelector(".cursor").getBoundingClientRect().x)
    console.log("x", {y: cursorConfigs.y.previous, x : cursorConfigs.x.previous})
    // Setting the cursor x and y to our cursoer html element
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    document.querySelector(".cursor").style.top = cursorConfigs.y.previous + scrollTop + "px";
    document.querySelector(".cursor").style.left = cursorConfigs.x.previous + "px";
    // RAF
    requestAnimationFrame(() => render(cursorConfigs));
  }

}

export default useCursor;