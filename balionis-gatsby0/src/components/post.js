import React from "react"
import postStyles from "./post.module.css"

export default function Post(props) {
  const { post } = props
  return (
    <div key={props.key} className={postStyles.container}>
      <h3 className={postStyles.title}>
        {post.frontmatter.title}{" "}
        <span className={postStyles.date}>
          — {post.frontmatter.date}
        </span>
      </h3>
      <p>{post.excerpt}</p>
    </div>
  )
}