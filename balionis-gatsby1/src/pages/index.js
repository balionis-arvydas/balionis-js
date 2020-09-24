import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { getUser, isLoggedIn } from "../services/auth"

export default function Home({ data }) {
  const { site } = data;

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
      <h1>Hello {isLoggedIn() ? getUser().name : "guest"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
      <Link to="/posts">Posts</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`