import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
    <li className={layoutStyles.link}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <Link to="/" className={layoutStyles.trademark}>
          <h3 style={{ display: `inline` }}>MySite</h3>
        </Link>
        <ul className={layoutStyles.menu}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}