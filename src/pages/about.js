import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"
import img from "../assets/about-img.jpeg"
const About = () => {
  const stack = []
  const title = "I"
  const info = "INFO"
  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={img} className="hero-photo" alt="about" />
          {/* <Image fluid={image.childImageSharp.fluid} className="about-img" /> */}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}



export default About
