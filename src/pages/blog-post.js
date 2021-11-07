import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../assets/css/post.css"
import "../assets/css/screen.css"

//내용 뎁스 페이지!

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
    <div className="blog-back">
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`blog-content ${post.frontmatter.thumbnail || `no-image`}`}
        > 
          {/* 
          {post.frontmatter.categories && (
            <p class="blog-categories">{post.frontmatter.categories}</p>
          )} */}

          <header className="blog-content-header">
            <p class="blog-categories">{post.frontmatter.categories}</p>
            <h1 className="blog-title">{post.frontmatter.title}</h1>
            <p class="blog-date">Posted on {post.frontmatter.date}</p>
          </header>


          {post.frontmatter.thumbnail && (
            <div className="blog-header-image">
              <Img className="header-img"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="blog-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

        </article>
        <Footer/>
      </Layout>
    </div>
    )
  }
}



export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}, fileAbsolutePath: {regex: "/blog/"}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
 ` 