import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';
import BlogDetail from '../components/blog-detail/BlogDetail.component'

const BlogTemplate = ({ data }) => {

  const { title, description } = data.blog

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
          <SEO title={title} description={description} />
          
          <BlogDetail blog={data.blog} />

        </Layout>
      </>
    </ThemeProvider>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: blogs(slug: { eq: $slug }) {
      content
      title
      description
      image
      category {
        id
        name
      }
    }
  }
`

export default BlogTemplate
