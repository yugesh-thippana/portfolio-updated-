import { useEffect } from "react";
import { createContext, useMemo, useState } from "react";
import { getMousePos } from "./Shared/VideoCursor.js/utils";

export const Context = createContext();

export default function ContextFunction({children}) {
  const [color, setColor] = useState("dark")
  const [{x,y}, setPosition] = useState({x:0,y:0})
  const [alert, setAlert] = useState(false)

  const white = "#fff"
  const blackPrimary = "rgb(32,35,37)"
  const whitePrimary = "rgb(232,230,226)"
  const bg = useMemo(() => {
    if(color === "dark") return blackPrimary
    if(color === "light") return whitePrimary
  }, [color])
  const primary = useMemo(() => {
    if(color === "dark") return whitePrimary
    if(color === "light") return blackPrimary
  }, [color])

  /* eslint-disable */
  useEffect(() => {
    document.querySelector("body").style.background = bg
  }, [color])
  /* eslint-enable */

  useEffect(()=> {
    window.addEventListener("mousemove", (ev) => {setPosition({...getMousePos(ev)}); window.x = ev.clientX; window.y = ev.clientY;});
  }, [])

  return (
    <Context.Provider value = {{
        color, setColor,
        bg, primary, white, whitePrimary, blackPrimary,
        x, y,
        alert, setAlert
    }}>
        {children}
    </Context.Provider>
  )
}
