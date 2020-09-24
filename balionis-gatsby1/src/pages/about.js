import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <p>This is about!</p>
      <p>
        <strong>Description:</strong> {data.site.siteMetadata.description}<br/>
        <strong>Author:</strong> {data.site.siteMetadata.author}
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`