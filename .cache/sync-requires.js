const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/milan/Desktop/gatsby-mdx-blog-project/src/templates/post-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/milan/Desktop/gatsby-mdx-blog-project/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/milan/Desktop/gatsby-mdx-blog-project/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/milan/Desktop/gatsby-mdx-blog-project/src/pages/index.js"))),
  "component---src-pages-post-mdx": hot(preferDefault(require("/home/milan/Desktop/gatsby-mdx-blog-project/src/pages/post.mdx")))
}

