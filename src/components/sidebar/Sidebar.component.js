import React from "react"
import links from "../../constants/links"
import socialLinks from "../../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import { Side, CloseBtn, SidebarLinks, SidebarSocialIcons, SidebarSocialIcon } from './Sidebar.styles'

const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <Side isOpen={isOpen}>
      <CloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </CloseBtn>
      <SidebarLinks isOpen={isOpen}>
        {links.map(link => {
          return(
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          )
        })}
      </SidebarLinks>
      <SidebarSocialIcons>
        {socialLinks.map(link => {
          return(
            <li key={link.id}>
              <SidebarSocialIcon href={link.url}>
                {link.icon}
              </SidebarSocialIcon>
            </li>
          )
        })}
      </SidebarSocialIcons>
    
    </Side>
  )
}

export default Sidebar
