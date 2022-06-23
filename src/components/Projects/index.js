import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Context } from '../../Context'
import data from "./data"
import "./index.scss"
import arrowRight from "../../icons/arrow-right-thin.svg"
import useCursor from "../../Shared/VideoCursor.js/cursor.js"


const ProjectMemo = React.memo(Project)

function Projects() {
  const { primary } = useContext(Context)
  useCursor(".cursor")

  return (
    <>
      <StyledProjects className='hero-inner-links' >
        <div style = {{position: "relative", width: "100%"}}> 
          {data.map((project, index) => (
            <ProjectMemo key={index} project = {project} index = {index}/>
          ))}

          <StyledCursor className="cursor" color = {primary}>
            <StyledCursorMedia className="cursor-media">
              {data.map((project, index) => (
                  <video
                  src="https://www.dofactory.com/media/movie.mp4"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  id={"project-name"+ index}
                ></video>
              ))}
            </StyledCursorMedia>
          </StyledCursor>

        </div>

      </StyledProjects>
    </>
  )
}

function Project ({project, index}) {
  const { primary, color } = useContext(Context)

  return (
    <Link to = {`/projects/${project.routeName}`} style = {{
      color: primary
    }}  >
      <ProjectItem 
        index = {index} 
        primary = {primary} 
        data-video-src = {"project-name"+ index} 
        className={"hero-inner-link-item project-item" + index}
        id = "projects-main"
      >
        {!index && 
          <div style = {{
              fontFamily: "luzia", 
              fontSize: "2.2em", 
              paddingLeft: "30px",
              position: "absolute",
              left: 0,
              top: "-80px",
              pointerEvents: "none"
            }}
            className = "title"
          >
            Featured Work 
            <img 
              style = {{
                filter: color === "dark" ? 
                  "invert(72%) sepia(34%) saturate(17%) hue-rotate(20deg) brightness(107%) contrast(91%)" :
                  "invert(0%) sepia(15%) saturate(4876%) hue-rotate(196deg) brightness(104%) contrast(96%)",
                transform: "translate(35px, -10px) rotate(90deg) scale(2)",
              }} 
              src = {arrowRight} 
              alt = "+"
            />
        </div>
        }

        <div className={"project-name project-name" + index}>
            {project.name}
        </div>

        <StyledRightProject className='project-right' style = {{transition: "all 0.4s"}}>
          <div className="project-date" >
            {project.date}
          </div>
          <div className="project-mini-desc">
            {project.description}
          </div>
        </StyledRightProject>

      </ProjectItem>
    </Link>
  )
}

const ProjectItem = styled.div`
  position: relative;
  border-bottom: 1px solid ${props => props.primary};
  border-top: ${props => !props.index ? `1px solid ${props.primary}`: null};

  font-size: 2rem;
  width: calc(100vw - 250px);
  min-width: 1200px;
  max-width: 1600px;
  height: 175px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;
  }

  &:hover > .project-name {
    transform: translateX(-20px);
  }
  &:hover > .project-right {
    transform: translateX(20px);
  }

  & .project-mini-desc {
    visibility: hidden;
  }
  &:hover  .project-mini-desc {
    visibility: visible;
    font-size: 1rem;
  }

  &:hover .title {
    opacity: 1;
  }

`
const StyledProjects = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 80px;

`
const StyledCursor = styled.div`
  &:before {
    background: ${props => props.color};
  }
`
const StyledRightProject = styled.div`
  display: flex;
  flex-direction: column;
  place-content: space-around;
  font-size: 1.5rem;

  height: 100%;
  width: 150px;

`

const StyledCursorMedia = styled.div`

`
export default React.memo(Projects)