require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteTitle: "hexameter",
    siteTitleAlt: `lyrically sound`,
    author: "Ralph 'Blake' Vente",
    description: "A window through my eyes.",
    siteUrl: "https://blog.rvente.com",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Home`,
            slug: `/`,
          },
          {
            title: `Posts`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/tags/projects`,
          },
          {
            title: `Art`,
            slug: `/tags/art`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/blake_2048`,
          },
          {
            name: `Insta`,
            url: `https://www.instagram.com/vente_nyc/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dactylic Hexameter`,
        short_name: `hexameter`,
        description: `Blake is a CS major exploring the worlds of AI, Computer Vision, Linguistics, and Generative Art`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
