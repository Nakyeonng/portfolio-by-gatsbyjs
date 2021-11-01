import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


//대문 썸네일
const BlogCard = props => {
  const image = getImage(props.node.frontmatter.thumbnail) 
return(
  <main>
    <article
      className={`blog-card ${props.count % 3 === 0 && `blog-card-large`} ${
        props.postClass
      } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    >
    <Link to={props.node.fields.slug}>
      <GatsbyImage className="blog-img"
        image={image}
        alt=""
      />
    </Link>
    </article>

    <p className="blog-category">{props.node.frontmatter.categories}</p>
    <Link to={props.node.fields.slug} className="blog-card-link" >
        <div>
          <p className="blog-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </p>
        </div>
    </Link>
    <p className="blog-description">{props.node.frontmatter.description}</p>
  </main>
  )
}

export default BlogCard