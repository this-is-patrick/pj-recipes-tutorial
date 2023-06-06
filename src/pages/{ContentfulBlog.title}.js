import React from "react";
import { graphql } from "gatsby";

const RecipeTemplate = (props) => {
  console.log(props);
  return (
    <div>
      <h4>{props.params.title} </h4>
    </div>
  );
};

export const query = graphql`
  query ($title: String) {
    contentfulBlog(title: { eq: $title }) {
      title
      cookTime
    }
  }
`;

export default RecipeTemplate;
