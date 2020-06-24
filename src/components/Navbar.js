import React, { useEffect } from "react"
import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {

  useEffect(() => {
    // add fixed class to navbar
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
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="logo" />
          <button type="button" className="nav-btn" id="nav-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar