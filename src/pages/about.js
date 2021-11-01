import React from "react"
import { Link } from "gatsby-link"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../assets/css/screen.css"
import "../assets/css/about.css"

// About 페이지 -> 완료! CSS만 남음!

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="about-time">
      <Layout title={siteTitle} className="size-setting">
        <SEO title="About"/>

        <article className="about-content">
          <div className="about-content-body">
            <section id="intro">
              <div class="wrap">
                <div class="inner">
                    <h3><span class="handshake" role="img" aria-label="hello">👋</span></h3>
                    <p>Hello! I'm nakyeong lee. I’m product designer based in korea.
                        I mostly work on product UX/UI design projects. 
                        I am passionate about solving problems to provide 
                        a better user experience and product.
                        So naturally I'm interested in data-driven, research, 
                        psychology, branding, etc.<br/>
                        Sometimes, I try or study web/ios development, graphic/3D design 
                        to improve understanding of the fields and trends.
                    </p><br/>
                </div>
            </div>
          </section>
          <section id="resume">
            <div class="wrap">
                <article class="contact">
                    {/*<p class="category">Contact</p>*/}
                    <div class="inner">
                        <p class="email tooltip">hello@leenakyeong.com
                        </p>
                    </div>
                </article>
            </div> 
          </section> 
          </div>
        </article>
        <Footer/>
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props}/>
    )}
  />
)
