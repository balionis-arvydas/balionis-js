# balionis-gatsby0

This spyke is to remind me how to setup __blank__ gatsby framework... 

_Note: See [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/) for other templates._

## Build 

```
$ npm install
// development
$ npm run develop 
$ curl http://localhost:8000
// production
$ npm run build
$ npm run serve
$ curl http://localhost:9000
```

## Develop

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. 
Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._


## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Steps: 

1. Start with 
- src/pages/index.js 

2. Add global styles
- src/styles/globals.css
- gatsby-browser.js

3. Add pages
- src/pages/about.js 
- src/pages/contact.js 

4. Add components (and component styles)
- src/components/layout.js

5. Add components (and component styles)
- src/components/layout.js

6. Add typography

```
$ npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
$ vi gatsby-config.js
```

7. Add siteMetadata graphql on pages and components
- src/pages/about.js
- src/components/layout.js

8. Add gatsby-source-filesystem 
```
$ npm install --save gatsby-source-filesystem
```
- gatsby-config.js
- src/pages/my-files.js
```
$ curl -X GET http://localhost:8000/my-files
```

8. Add gatsby-transformer-remark (to read .md files)
```
$ npm install --save gatsby-transformer-remark
```
- gatsby-config.js
- src/pages/my-posts.js
- src/pages/posts/post1.md
- src/pages/posts/post2.md
- src/components/post.js
- src/components/post.module.css
```
$ curl -X GET http://localhost:8000/my-posts
```
