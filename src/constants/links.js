import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/",
  },
  {
    id: 3,
    text: "blog",
    url: "/",
  },
  {
    id: 4,
    text: "contact",
    url: "/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default () => {
  return (
    <ul className="nav-links">
      {tempLinks}
    </ul>
  )
}
