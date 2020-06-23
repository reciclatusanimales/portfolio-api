import React from "react"
import Title from "./Title"

const Skills = () => {
  return (
    <section className="skills section">
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        <article>
          <h3>front end</h3>
          <div className="skill">
            <p>HTML/CSS</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                50%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>javascript</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                70%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>react</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
              </p>
            </div>
          </div>
        </article>
        <article>
          <h3>back end</h3>
          <div className="skill">
            <p>node</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                50%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>PHP</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                70%
              </p>
            </div>
          </div>
          <div className="skill">
            <p>python</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
