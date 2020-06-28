import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const Blog = ({ id, title, image, created_at, slug, category, description }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <img src={image} className="blog-img" alt="blog" />
          // <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category.name}</p>
            <p>{created_at}</p>
          </div>
        </div>
      </article>
    </Link>
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
