import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"
import { BlogTemplate } from './BlogDetail.styles'

const BlogDetail = ({ blog }) => {

    const { content, title, description, category, image } = blog

    return (
        <BlogTemplate>
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
        </BlogTemplate>
    )
}


export default BlogDetail