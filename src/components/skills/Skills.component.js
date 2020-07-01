import React from "react"
import { SkillsContainer, SkillsCenter, Skill, SkillContainer, SkillValue, SkillText } from  "./Skills.styles"
import skills from '../../constants/skills'

const Skills = () => {
  return (
    <SkillsContainer className="section">
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <SkillsCenter className="section-center">
        {skills.map(skill => (
          <article key={skill.id}>
            <h3>{skill.name}</h3>
            {skill.skills.map(value => (
              <Skill key={value.id}>
                <p>{value.name}</p>
                <SkillContainer>
                  <SkillValue value={value.percent}></SkillValue>
                  <SkillText value={value.percent}>
                    {value.percent}%
                  </SkillText>
                </SkillContainer>
              </Skill>
            ))}            
          </article>
        ))}        
      </SkillsCenter>
    </SkillsContainer>
  )
}

export default Skills
