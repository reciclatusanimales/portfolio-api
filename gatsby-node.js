const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allBlogs {
        nodes {
          slug
        }          
      }
    }
  `)

  result.data.allBlogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
