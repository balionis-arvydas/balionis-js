import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <p>This is home!</p>      
      <ul style={{listStyle: `none`, margin: 0}}>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/files">Files</Link></li>
      </ul>
    </Layout>
  )
}
