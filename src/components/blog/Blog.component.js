import React from "react"
import PropTypes from "prop-types"
import { BlogContainer, BlogImg, BlogCard, BlogFooter } from "./Blog.styles"

const Blog = ({ id, title, image, created_at, slug, category, description }) => {

  return (
    <BlogContainer to={`/blogs/${slug}`} key={id}>
      <article>
        {image && (
          <BlogImg src={image} alt="blog" />
          // <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <BlogCard>
          <h4>{title}</h4>
          <p>{description}</p>
          <BlogFooter>
            <p>{category.name}</p>
            <p>{created_at}</p>
          </BlogFooter>
        </BlogCard>
      </article>
    </BlogContainer>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Blog
