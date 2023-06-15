/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// Needed for Contentful plugin to access proxy settings
// https://github.com/gatsbyjs/gatsby/issues/28526
require("global-agent/bootstrap");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@pjjimiso",
    person: { name: "patrick", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "patrick", age: 32 },
      { name: "domenica", age: 25 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d4kaowmojbwt`,
        accessToken: process.env.CONTENTFUL_API_KEY,
        //proxy: {
        //  protocol: "https",
        //  host: "10.1.192.48",
        //  port: 912,
        //  auth: {
        //    username: "pjjimiso",
        //    password: "st1llness211!",
        //  },
        //},
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
};
