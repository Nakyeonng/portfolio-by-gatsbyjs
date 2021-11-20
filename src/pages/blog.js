import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import BlogCard from "../components/blogCard"

import "../assets/css/screen.css"
import "../assets/css/blog.css"

//Elements 페이지 (제작자의 연습용 페이지였던 듯) nope!
//근데 code 태그 매력있는게...! 나중에 블로그 페이지 추가할때 md연결용으로 하면 좋을듯!

const BlogPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  const {pathname} = useLocation()
  return (
    <div className="blog-container">
      <Layout title={siteTitle} className="size-setting">
        <SEO title="Home"/>
        
          {data.site.siteMetadata.description && (
            <div className="page-head">
            </div>
          )}
        <div className="blog-area">
          <div className="blog-filter">
            <p className="label">A space to build up skills<br/>  through various<br/> exercises &amp; inspiration.</p>

            <ul className="filter-list">
              <li>
                <a href="#"
                >Latest</a></li>
              <li>
                <a href="#"
                >Design ✨</a></li>
              <li>
                <a href="#"
                >Coding</a></li>
                <li>
                  <a href="#"
                  >Inspiration</a></li>
              </ul>
          </div>

          <div className="blog-feed">
            {posts.map(({ node }) => {
              postCounter++
              return (
                <BlogCard
                  key={node.fields.slug}
                  count={postCounter}
                  node={node}
                  postClass={`post`}
                />
              )
            })}
          </div>
        </div>
        <Footer/>
      </Layout>
    </div>
  )
}

const indexQuery = graphql`{
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, 
    filter: {fileAbsolutePath: {regex: "/blog/"}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          categories
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogPage location={props.location} props data={data} {...props} />
    )}
  />
)
