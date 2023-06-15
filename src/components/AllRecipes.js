import React from "react";
import Tagslist from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allContentfulBlog(sort: { title: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
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

  return (
    <section className="recipes-container">
      <h4>all recipes</h4>
      <Tagslist recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
