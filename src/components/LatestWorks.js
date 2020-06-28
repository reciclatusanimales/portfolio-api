import React from "react"

const LatestWorks = ({ projects }) => {

  return (
    <section className="section latest-works">    
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="latest-works-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </p>
      </div>      
      <div className="section-center latest-works-center">

        {projects.map((project, index) => {
          return (
            <a href={project.url} className={`work-${index}`} key={index} target="_blank" rel="noreferrer">
              <article className="work">
                <img src={project.image} className="work-img" alt="project" />
                {/* <Image fluid={project.image.childImageSharp.fluid} className="project-img" /> */}
                <div className="work-info">
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
