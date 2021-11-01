import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//대문 썸네일
const ProjectCard = props => {
  const image = getImage(props.node.frontmatter.thumbnail) 
return(
  <main>
    <article
      className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
        props.postClass
      } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    >
    <Link to={props.node.fields.slug}>
    <GatsbyImage
      image={image}
      alt=""
    />
    </Link>
    </article>

    <Link to={props.node.fields.slug} className="post-card-link">
        <div>
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
        </div>
    </Link>
    <p className="post-category">{props.node.frontmatter.categories}</p>
  </main>
  )
}

export default ProjectCard