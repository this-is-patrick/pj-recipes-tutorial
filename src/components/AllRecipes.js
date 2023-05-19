import React from "react";
import Tagslist from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allContentfulBlog(sort: { title: ASC }) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImage(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulBlog.nodes;
  console.log(recipes);
  return (
    <div>
      <h4>all recipes</h4>
      <Tagslist />
      <RecipesList />
    </div>
  );
};

export default AllRecipes;
