import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allProjects{
      nodes{
        github
        id
        description
        title
        url
        image
      }
    }
  }
`

export default ProjectsPage
