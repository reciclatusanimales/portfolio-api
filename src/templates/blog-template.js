import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, description, category, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <h2>Subtitle</h2>

            <ul>
              <li>{category.name}</li>
            </ul>
            
            <img src={image} alt="about" />

            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
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

export default ComponentName
