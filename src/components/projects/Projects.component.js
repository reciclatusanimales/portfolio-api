import React from "react"
import Title from "../title/Title.component"
import Project from "../project/Project.component"
import { Link } from "gatsby"
import { ProjectsContainer } from "./Projects.styles"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer className="section">
      <Title title={title} />
      <div className="section-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </ProjectsContainer>
  )
}

export default Projects
  