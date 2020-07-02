module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@webdev",
    twitterUsername: "@john_smilga",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-custom-api",
        options: {
          url: "http://reciclatusanimales.com/api/projects",
          rootKey: "projects",
          schemas:  {
            projects: `
              title: String
              description: String
              image: String, 
              github: String, 
              url: String, 
              featured: Boolean
            `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
        options: {
          url: "http://reciclatusanimales.com/api/jobs",
          rootKey: "jobs",
          schemas:  {
            jobs: `
              company: String
              position: String
              date: Date
            `
        }
      }
    },
    {
    resolve: "gatsby-source-custom-api",
      options: {
          url: "http://reciclatusanimales.com/api/blogs",
          rootKey: "blogs",
          schemas:  {
            blogs: `
              title: String
              description: String
              image: String, 
              content: String, 
              slug: String,
              created_at: Date
            `
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
