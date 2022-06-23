import React, {useEffect, useRef} from 'react'
import ScrollReveal from 'scrollreveal'

 function Index() {
   const textRef = useRef()

   useEffect(() => {
    ScrollReveal().reveal(".bnmj");
   }, [])

  return (
    <div className='banner' id = "about" style = {{
      fontFamily: "luzia",
      paddingTop: "80px",
      paddingBottom: "120px",
    }}>
      <div className="banner-row">
        <div className="row-letter" style = {{textAlign: "center", width: "100vw",
      }}>
          <div>About</div> 
          <div className="row-letter small bnmj" ref = {textRef} style = {{
            width: "1200px",
            margin: "auto",
            whiteSpace: "pre-wrap",
            display: "flex",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "40px",
          textAlign: "left",
          fontSize: "1.75rem",
          alignItems: "center",
          letterSpacing: "-0.2px"
          }}>
              <div>
                I started building websites during my highschool and went professional as a freelancer during my college years. Fast-forward to today, I make frontend UI with good user experience and fullstack scalable web applications mainly using MERN/PERN stack.  
                <div style = {{paddingTop: "25px", fontSize: "1.4rem"}}>
                  <div style = {{padding: "3px"}}>
                  Frontend tools: React, Angular, Nextjs, Scss, Redux, react-testing-library, jest
                  </div>
                  <div style = {{padding: "3px"}}>
                  Backend tools: Nodejs, expressjs, postgresql, mongoDB, graphQL, Firebase
                  </div>
                  <div style = {{padding: "3px"}}>
                    Other tools: Git, Bitbucket, jira, vscode, webflow, figma, vercel
                  </div>
                </div>
              </div>      
              <div>
                  <img src = "https://i.ibb.co/xDrxgpj/linkedinmaincrop.jpg" width ="300px" height = "auto" alt = "yugesh" style = {{borderRadius: "50%"}}/>
                </div>     
          </div>
        </div>
      </div>

      {/* <div className="banner-row">
      </div> */}
    </div>
  )
}

export default React.memo(Index)