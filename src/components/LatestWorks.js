import React from "react"
import Image from "gatsby-image"

const LatestWorks = ({ projects }) => {
  console.log(projects)
  return (
    <section className="section projects">    
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </p>
      </div>      
      <div className="section-center projects-center">

        {projects.map((project, index) => {
          return (
            <a href={project.url} className={`project-${index}`} key={index} target="_blank">
              <article className="project">
                <Image fluid={project.image.childImageSharp.fluid} className="project-img" />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </article>
            </a>
          )
        })}
        
      </div>
    </section>
  )
}

export default LatestWorks
