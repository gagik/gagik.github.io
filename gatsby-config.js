/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: 'Gagik Amaryan',
    titleTemplate: '%s - Gagik Amaryan',
    description: 
      'I combine art, design, and technology to make cool and meaningful projects.',
    url: 'https://www.gagikamaryan.com',
    image: "/thumbnail.jpg",
    author: 'Gagik Amaryan',
    twitterUsername: "@gagikamaryan_",
    links: [
      ['email', 'https://github.com/gagik/'],
      ['github', 'https://github.com/gagik/'],
      ['youtube', 'https://www.youtube.com/c/GagikAmaryan']
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp', 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'qmoyvcam2b9j',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        downloadLocal: true,
      },
    },
],
}
