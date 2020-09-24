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