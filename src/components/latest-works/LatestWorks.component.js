import React from "react"
import { Text, LatestWorksCenter, WorkImg, Work, WorkInfo } from './LatestWorks.styles'

const LatestWorks = ({ projects }) => {

  return (
    <section className="section latest-works">    
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </Text>
      </div>      
      <LatestWorksCenter className="section-center">

        {projects.map((project, index) => {
          return (
            <a href={project.url} className={`work-${index}`} key={index} target="_blank" rel="noreferrer">
              <Work>
                <WorkImg src={project.image} alt="project" />
                {/* <Image fluid={project.image.childImageSharp.fluid} className="project-img" /> */}
                <WorkInfo>
                  <h4>{project.title}</h4>
                  <p>{project.subtitle}</p>
                </WorkInfo>
              </Work>
            </a>
          )
        })}
        
      </LatestWorksCenter>
    </section>
  )
}

export default LatestWorks
