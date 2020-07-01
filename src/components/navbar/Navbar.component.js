import React, { useState, useEffect } from "react"
import { FaAlignJustify } from "react-icons/fa"
import ThemeSwitch from "../ThemeSwitch"
import { Nav, NavCenter, NavHeader, NavBtn, NavLinks } from "./Navbar.styles"
import { Link } from "gatsby"
import links from '../../constants/links'
import { css } from 'styled-components'

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {

  const [ showTheme, setShowTheme ] = useState(true);

  useEffect(() => {
    const navbar = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
        setShowTheme(false);
      } else {
        navbar.classList.remove("navbar-fixed");
        setShowTheme(true);
      }
    });
  }, []);

  return (
    <Nav id="nav">
      
      { showTheme &&
        <ThemeSwitch 
          theme={theme} 
          toggleTheme={toggleTheme}            
        /> 
      
      }
      <NavCenter>
        
        <NavHeader>
          
          <NavBtn type="button" id="nav-btn" onClick={toggleSidebar}>
            <FaAlignJustify></FaAlignJustify>
          </NavBtn>
        </NavHeader>
        <NavLinks>
          {links.map(link => {
            return(
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </NavLinks>
      </NavCenter>
    </Nav>
  )
}

export default Navbar
