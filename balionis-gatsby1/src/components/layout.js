import React from "react"
import { useStaticQuery, Link, graphql, navigate } from "gatsby"
import layoutStyles from "./layout.module.css"
import { isLoggedIn, logout } from "../services/auth"

const ListLink = props => (
    <li className={layoutStyles.link}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            trademark
          }
        }
      }
    `
  )  
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <Link to="/" className={layoutStyles.trademark}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.trademark}</h3>
        </Link>
        <ul className={layoutStyles.menu}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          {isLoggedIn() ? (
            <ListLink to="/app/profile">Profile</ListLink>
          ) : null}
          <li className={layoutStyles.link}>
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}
            >
              {isLoggedIn() ? (`Logout`) : (`Login`)}          
            </a>
          </li>
        </ul>
      </header>
      {children}
    </div>
  )
}