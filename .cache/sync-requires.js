const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/blog.js"))),
  "component---src-pages-blog-post-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/blog-post.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/index.js"))),
  "component---src-pages-project-post-project-post-js": hot(preferDefault(require("/Users/nakyeong/Desktop/web-portfolio/portfolio-by-gatsbyjs/src/pages/project-post/project-post.js")))
}

