import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/projects/Projects.component"
import SEO from "../components/SEO"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';

const ProjectsPage = ({
  data: {
    allProjects: { nodes: projects },
  },
}) => {

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
        <SEO title="Projects" />
        <section className="projects-page">
          <Projects projects={projects} title="all projects" />
        </section>
      </Layout>
      </>
    </ThemeProvider>
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
