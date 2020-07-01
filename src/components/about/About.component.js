import React from "react"
import img from "../../assets/about-img.jpeg"
import { AboutCenter, AboutImg, AboutInfo, AboutTitle } from "../about/About.styles"


const About = () => {

  return (
    <section className="section about">
      <AboutCenter className="section-center">
        <AboutImg>
          <img src={img} className="hero-photo" alt="about" />
          {/* <Image fluid={fluid} className="project-img2" /> */}
        </AboutImg>
        <AboutInfo>
            <AboutTitle className="section-title">
                <h2>about</h2>
                <div className="underline"></div>
            </AboutTitle>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
                vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
                expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
                officiis maxime?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
                vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
                expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
                officiis maxime?
            </p>
            {/* <a href="about.html" className="btn about-btn">about me</a> */}
        </AboutInfo>
      </AboutCenter>
    </section>
  )
}

export default About
