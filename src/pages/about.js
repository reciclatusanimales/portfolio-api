import React from "react"
import Layout from "../components/Layout"
import Title from "../components/title/Title.component"
import SEO from "../components/SEO"
import img from "../assets/about-img.jpeg"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';

const About = () => {
  const stack = []
  const title = "I"
  const info = "INFO"

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <SEO title="About Me" description="about webdev" />
          <section className="about-page">
            <div className="section-center about-center">
              <img src={img} className="about-img" alt="about" />
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
      </>
    </ThemeProvider>
  )
}



export default About
