import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Geruso Site`,
    siteUrl: `https://www.geruso.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        url: `https://dev.to/api/articles/me`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.DEV_API_KEY,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
               path
            }
          }
        }
        `,
        resolveSiteUrl: () => `https://www.geruso.com`,
        resolvePages: ({ allSitePage: { nodes: allPages } }: any) => {
          return allPages.map((page: any) => {
            return { ...page };
          });
        },
        serialize: ({ path, modifiedGmt }: any) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          origin: 'https://www.googletagmanager.com',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};

export default config;
