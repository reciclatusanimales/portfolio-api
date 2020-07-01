import React, { useEffect } from "react"
import { FaAlignJustify } from "react-icons/fa"
import ThemeSwitch from "../ThemeSwitch"
import { Nav, NavCenter, NavHeader, NavBtn, NavLinks } from "./Navbar.styles"
import { Link } from "gatsby"
import links from '../../constants/links'

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {

  useEffect(() => {
    const navbar = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    });
  }, []);

  return (
    <Nav id="nav">
      <NavCenter>
        <NavHeader>
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme}/>
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
