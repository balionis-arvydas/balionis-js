# balionis-gatsby1

This spyke is to remind me how to build gatsby app with custom authentication. It uses balionis-gatsby0 as baseline.

## Steps: 

1. Cleanup gatsby0 
```
$ touch src/pages/_blank.md
$ mkdir src/pages/posts
$ mv src/pages/post*.md src/pages/posts
$ rm src/pages/files.js
$ rm src/pages/contact.js
$ git diff src/components/layout.js
...
@@ -29,7 +29,6 @@ export default function Layout({ children }) {
         <ul className={layoutStyles.menu}>
           <ListLink to="/">Home</ListLink>
           <ListLink to="/about/">About</ListLink>
-          <ListLink to="/contact/">Contact</ListLink>
         </ul>
       </header>
       {children}
...
$ git diff src/pages/index.js
...
@@ -12,7 +12,6 @@ export default function Home({ data }) {
       <p>This is home!</p>
       <ul style={{listStyle: `none`, margin: 0}}>
         <li><Link to="/posts">Posts</Link></li>
-        <li><Link to="/files">Files</Link></li>
       </ul>
     </Layout>
   )
...
$ git diff src/pages/posts.js
...
@@ -19,7 +19,7 @@ export default function Posts({ data }) {

 export const query = graphql`
   query {
-    allMarkdownRemark {
+    allMarkdownRemark(filter: {fields: {slug: {ne: "/_blank/"}}}) {
       totalCount
       edges {
         node {
...
```

2. Add auth

```
$ touch src/services/auth.js
$ touch src/components/login.js
$ touch src/components/login.module.css
$ touch src/components/privateRoute.js
$ touch src/components/profile.js
$ touch src/pages/app.js

$ git diff gatsby-node.js
...
@@ -15,6 +15,14 @@ exports.onCreateNode = ({ node, getNode, actions }) => {
   }
 }

+exports.onCreatePage = async ({ page, actions }) => {
+  const { createPage } = actions
+  if (page.path.match(/^\/app/)) {
+    page.matchPath = "/app/*"
+    createPage(page)
+  }
+}
+
 exports.createPages = async ({ graphql, actions }) => {
...

$ git diff src/components/layout.js
...
@@ -1,6 +1,7 @@
 import React from "react"
-import { useStaticQuery, Link, graphql } from "gatsby"
+import { useStaticQuery, Link, graphql, navigate } from "gatsby"
 import layoutStyles from "./layout.module.css"
+import { isLoggedIn, logout } from "../services/auth"

 const ListLink = props => (
     <li className={layoutStyles.link}>
@@ -29,6 +30,20 @@ export default function Layout({ children }) {
         <ul className={layoutStyles.menu}>
           <ListLink to="/">Home</ListLink>
           <ListLink to="/about/">About</ListLink>
+          {isLoggedIn() ? (
+            <ListLink to="/app/profile">Profile</ListLink>
+          ) : null}
+          <li className={layoutStyles.link}>
+            <a
+              href="/"
+              onClick={event => {
+                event.preventDefault()
+                logout(() => navigate(`/app/login`))
+              }}
+            >
+              {isLoggedIn() ? (`Logout`) : (`Login`)}
+            </a>
+          </li>
         </ul>
       </header>
       {children}
...

$ git diff src/pages/index.js
...
@@ -2,6 +2,7 @@ import React from "react"
 import Layout from "../components/layout"
 import { graphql, Link } from "gatsby"
 import SEO from "../components/seo"
+import { getUser, isLoggedIn } from "../services/auth"

 export default function Home({ data }) {
   const { site } = data;
@@ -9,10 +10,21 @@ export default function Home({ data }) {
   return (
     <Layout>
       <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
-      <p>This is home!</p>
-      <ul style={{listStyle: `none`, margin: 0}}>
-        <li><Link to="/posts">Posts</Link></li>
-      </ul>
+      <h1>Hello {isLoggedIn() ? getUser().name : "guest"}!</h1>
+      <p>
+        {isLoggedIn() ? (
+          <>
+            You are logged in, so check your{" "}
+            <Link to="/app/profile">profile</Link>
+          </>
+        ) : (
+          <>
+            You should <Link to="/app/login">log in</Link> to see restricted
+            content
+          </>
+        )}
+      </p>
+      <Link to="/posts">Posts</Link>
     </Layout>
   )
 }

```