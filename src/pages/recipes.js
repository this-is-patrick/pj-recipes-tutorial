import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import { SEO } from "../components/SEO";

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;

export const Head = () => <SEO title="Recipes" />;
