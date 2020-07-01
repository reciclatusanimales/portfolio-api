import React from "react"
import img from "../../assets/hero-img.jpeg"
import { Link } from "gatsby"
import { Header, HeroCenter, HeroInfo, HeroImg, HeroTitle } from './Hero.stlyes'

const Hero = () => {

  return (
    <Header>
      <HeroCenter className="section-center">
        <HeroInfo>
          <HeroTitle>
            <div className="underline"></div>
            <h1>i'm john</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact
            </Link>
            {/* <SocialLinks /> */}
          </HeroTitle>
        </HeroInfo>
        <HeroImg>
          {/* <Image fluid={fluid} className="hero-photo" /> */}
          <img src={img} className="hero-photo" alt="john doe" />
        </HeroImg>
      </HeroCenter>
    </Header>
  )
}

export default Hero
