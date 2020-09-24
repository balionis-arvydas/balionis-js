import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"

export default function Posts({ data }) {
  return (
    <Layout>      
      <div>
        <h1>My Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id} post={node}/>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {ne: "/_blank/"}}}) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }  
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          id
        }
      }
    }
  }
`