import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Link to="/posts">&#8592; Back</Link>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`