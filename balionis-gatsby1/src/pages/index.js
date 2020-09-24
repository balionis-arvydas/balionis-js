import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default function Home({ data }) {
  const { site } = data;

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
      <p>This is home!</p>
      <ul style={{listStyle: `none`, margin: 0}}>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
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