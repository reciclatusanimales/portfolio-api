import React from "react"
import img from "../assets/about-img.jpeg"


const About = () => {

  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={img} className="hero-photo" alt="about" />
          {/* <Image fluid={fluid} className="project-img2" /> */}
        </article>
        <article className="about-info">
            <div className="section-title about-title">
                <h2>about</h2>
                <div className="underline"></div>
            </div>
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
        </article>
      </div>
    </section>
  )
}

export default About
