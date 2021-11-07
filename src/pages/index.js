import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

// import "../utils/global.scss"
import "../assets/normalize.css"
import "../assets/css/screen.css"

// 메인 페이지 (거의 껍데기.. 그 내막은 layout.js와 postCard에 있는듯)
//seo 메타데이터로 상단 설명 부분을 가져오고,
// layout.js가 그 바탕이 되는 듯 함.

const IndexPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <div className="index-container">
      <Layout title={siteTitle} className="size-setting">
        <SEO title="Home"/>
        
        {/*{data.site.siteMetadata.description && (*/}
          <header className="page-head">
            <h2 className="page-head-title">
              {/*{data.site.siteMetadata.description}*/}
              Hello! I’m nakyeong lee,<br/>Product UIUX Designer.<br/>I love creating<span role="img" aria-label="sheep"> 🛠</span>, learning <span role="img" aria-label="sheep">📖</span><br/>and inspiration <span role="img" aria-label="sheep">👀</span>.
              {/*안녕하세요. <br/>
              영감을 사랑하는<br/>
              디자이너 <bold>이나경</bold>입니다*/}
            </h2>
            <p className="page-head-hashtag">#UI #UX #Design #<span role="img" aria-label="sheep">🔥</span></p>
            <p className="page-head-topic">Have fun and check out my projects.<br/>Feedback is always welcome!</p>
          </header>
        {/*)}*/}
        <div className="post-feed">
          {posts.map(({ node }) => {
            postCounter++
            return (
              <ProjectCard
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
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
    filter: {fileAbsolutePath: {regex: "/projects/"}}) {
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
      <IndexPage location={props.location} props data={data} {...props} />
    )}
  />
)
