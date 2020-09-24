import React from "react"
import postStyles from "./post.module.css"
import { Link } from "gatsby"

export default function Post(props) {
  const { post } = props
  return (
    <div className={postStyles.container}>
      <h3 className={postStyles.title}>
        <Link to={post.fields.slug} 
            style={{textDecoration: `none`, color: `inherit`}}>
          {post.frontmatter.title}{" "}
          <span className={postStyles.date}>
            — {post.frontmatter.date}
          </span>
        </Link>
      </h3>
      <p>{post.excerpt}</p>
    </div>
  )
}