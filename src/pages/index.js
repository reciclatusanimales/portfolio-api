import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero.component"
import Services from "../components/services/Services.component"
import Jobs from "../components/jobs/Jobs.component"
import About from "../components/about/About.component"
import Skills from "../components/skills/Skills.component"
import Blogs from "../components/blogs/Blogs.component"
import LatestWorks from "../components/latest-works/LatestWorks.component"
import SEO from "../components/SEO"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';

export default ({ data }) => {
  const {
    allBlogs: { nodes: blogs },
    allProjects: { nodes: projects },
  } = data

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles />
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <SEO title="Home" description="this is our home page" />
          <Hero />
          <About />
          <Services />
          <LatestWorks projects={projects} />
          <Skills />
          <Jobs />
          <Blogs blogs={blogs} title="latest articles" showLink />
        </Layout>
      </>
    </ThemeProvider>
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
        subtitle
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
