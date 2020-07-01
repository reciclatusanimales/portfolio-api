import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectContainer, ProjectImg, ProjectInfo, ProjectNumber, ProjectDescription, ProjectStack, ProjectGithub } from './Project.styles'

const Project = ({ description, title, subtitle, github, stack, url, image, index }) => {
  stack = []
  return (
    <ProjectContainer>
      {image && (
        <ProjectImg src={image} alt="project" />
        // <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <ProjectInfo>
        <ProjectNumber>0{index + 1}.</ProjectNumber>
        <h3>{title || "default title"}</h3>
        <ProjectDescription dangerouslySetInnerHTML={{__html: description}} ></ProjectDescription>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <div className="project-links">
          <a href={github}>
            <ProjectGithub />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </ProjectInfo>
    </ProjectContainer>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  //stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
