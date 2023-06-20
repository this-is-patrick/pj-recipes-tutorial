import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          image
          description
          author
        }
      }
    }
  `);

  return data.site.siteMetaData;
};
