import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import About from "../components/About"
import Skills from "../components/Skills"
import Blogs from "../components/Blogs"
import LatestWorks from "../components/LatestWorks"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allBlogs: { nodes: blogs },
    allProjects: { nodes: projects },
  } = data

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <About />
      <Services />
      <LatestWorks projects={projects} />
      <Skills />
      <Jobs />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allProjects(filter: { featured: { eq: true } }){
      nodes{
        github
        id
        description
        title
        url
        image
      }
    }
    allBlogs(sort: { fields: created_at, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        description
        category{
          id
          name
        }
        created_at(formatString: "MMMM Do, YYYY")
        id
        title
        image
      }
    }  
  }
`
