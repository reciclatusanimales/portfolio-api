import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/themes';
import { GlobalStyles } from '../global';
import Contact from '../components/contact/Contact.component'

export default () => {

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
          <SEO title="Contact" />

          <Contact />
          
        </Layout>
      </>
    </ThemeProvider>
  )
}