import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>Name: {data.site.siteMetadata.person.name}</h2>
      <h2>Title: {title}</h2>
    </div>
  );
};

export default FetchData;
