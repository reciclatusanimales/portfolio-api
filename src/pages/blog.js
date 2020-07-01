import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/blogs/Blogs.component"
import SEO from "../components/SEO"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';

const Blog = ({
  data: {
    allBlogs: { nodes: blogs },
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
          <SEO title="Blog" />
          <section className="blog-page">
            <Blogs blogs={blogs} title="blog" />
          </section>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export const query = graphql`
  {
    allBlogs {
      nodes {
        slug
        content
        description
        category{
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
export default Blog
