import React from "react"
import Navbar from "./navbar/Navbar.component"
import Sidebar from "./sidebar/Sidebar.component"
import Footer from "./footer/Footer.component"

const Layout = ({ theme, toggleTheme, children }) => {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} theme={theme} toggleTheme={toggleTheme}/>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      <Footer />
    </>
  )
}

export default Layout
