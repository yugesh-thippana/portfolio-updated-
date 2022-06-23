import React, { useContext, useEffect } from 'react'
import ReactDOM from "react-dom"
import gsap from "gsap"
import { Context } from '../../Context'

export default function Alert({time = 2000}) {
    const {alert, setAlert, primary, bg} = useContext(Context)
    useEffect(() => {
        if(!alert) return

        gsap.fromTo(".alert",{
            y: 0
        }, {
            delay: (time - 300)/1000,
            y: -250,
            duration: 1,
            opacity: 0
        })

        setTimeout(() => {
            setAlert(false)
        }, time);
    }, [alert, time, setAlert])

  return (
    <div>
        {alert && ReactDOM.createPortal(
            <div className = "alert" style = {{
                width: "500px",
                padding: "20px",
                color: bg,
                background: primary,
                fontFamily: "luzia",
                fontWeight: "800"
            }}>
                {alert}
            </div>,
            document.querySelector("#alert")
        )}
    </div>
  )
}
