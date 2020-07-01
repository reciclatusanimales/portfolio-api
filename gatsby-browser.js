import "./src/css/main.css"
import React from "react"
import { ThemeProvider } from "./src/components/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)