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
  ],
};

export default config;
