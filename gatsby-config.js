module.exports = {
  pathPrefix: '/images',
  siteMetadata: {
    title: "My Portfolio",
    description: "My test site",
    keywords: "badass, portfolio"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    }
  ]

};
