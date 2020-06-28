import React from "react"
import img from "../assets/hero-img.jpeg"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm john</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <article className="hero-img">
          {/* <Image fluid={fluid} className="hero-photo" /> */}
          <img src={img} className="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  )
}

export default Hero
