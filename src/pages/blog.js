import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/blogs/Blogs.component"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
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
