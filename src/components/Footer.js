import React, { useEffect } from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {

  useEffect(() => {
    const date = document.querySelector("#date");
    date.innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer">
      <SocialLinks className="footer-links"></SocialLinks>
      <p>&copy; <span id="date"></span> John Doe. All rights reserved.</p>
    </footer>
  )
}

export default Footer
