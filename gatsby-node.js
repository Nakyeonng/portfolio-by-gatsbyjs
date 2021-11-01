const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, actions, getNode }) => {

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes(`content/projects`)) {
   const value = createFilePath({node, getNode}) 
  createNodeField({
      name: `slug`,
      node,
      value: `/projects${value}`,
    })
  }
  else if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath.includes(`content/blog`)){
    const value = createFilePath({node, getNode})
  createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`
    })
  }
} 

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const ProjectPostTemplate = path.resolve(`./src/pages/project-post/project-post.js`)
  const BlogPostTemplate = path.resolve(`./src/pages/blog-post/blog-post.js`)

  const result =  graphql(`
    {
      projects : allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, 
        limit: 1000, filter: {fileAbsolutePath: {regex: "/projects/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
            id
          }
        }
      }
      blog : allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, 
        limit: 1000, filter: {fileAbsolutePath: {regex: "/blog/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
            id
          }
        }
      }
    }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create posts pages.
    const projects = result.data.projects.edges
    const blog = result.data.blog.edges

    projects.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: ProjectPostTemplate,
        context: {
          slug: node.fields.slug,
          id: node.id
        },
      })
    })


  // Create posts pages.
  // const posts = result.data.allMarkdownRemark.edges

  blog.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug,
        id: node.id
      },
    })
  })

  })
}


