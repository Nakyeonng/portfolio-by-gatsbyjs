import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//404 에러페이지

// styles

const pageStyles = {
  textAlign: "center",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  textAlign: "center"
}
const buttonStyles = {
  padding : "6px 16px",
  background: "#fff",
  border : "1px solid #ccc",
  borderRadius : "8px",
  fontWeight: "700",
  color : "#333"
}
const paragraphStyles = {
  marginBottom: 48,
}

//완료! 정렬만 정리하면 될듯!

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
    <div className="error-time">
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Oops!" />
          <div style={pageStyles}>
            {/*<h1>Page not found</h1>*/}
            <h3 style={{textAlign :`center`}}><
              span role="img" aria-label="sheep">🤭🥲</span>
            </h3>
            <h5 style={headingStyles}>앗... 페이지를 찾을 수 없어요</h5>
            <p style={paragraphStyles}>
              {/*Sorry{" "}*/}
              아래 버튼으로 메인페이지로 복귀해보세요!<br/>
              <br />
              <br />
              <Link to="/">
              <button style={buttonStyles}>홈으로</button>
              </Link>
            </p>
          </div>
      </Layout>
    </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
