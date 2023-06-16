import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contact = ({ data }) => {
  const recipes = data.allContentfulBlog.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby cardigan taiyaki fit readymade echo park swag offal
              before they sold out XOXO ramps actually whatever street art
              gochujang. Skateboard actually lumbersexual, Brooklyn marfa PBR&B
              gluten-free kale chips.
            </p>
            <p>
              Fanny pack paleo helvetica banjo occupy leggings succulents
              aesthetic cardigan disrupt schlitz.
            </p>
            <p>
              Cornhole salvia tbh art party, vibecession pok pok Brooklyn
              tousled retro iceland shabby chic fixie. Tacos snackwave
              intelligentsia, tofu jean shorts chambray migas edison bulb
              poutine narwhal pug schlitz everyday carry organic. Enamel pin
              subway tile cliche gentrify meggings yr.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mvoneqln"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <input name="message" id="message" />
              </div>
              <button type="submit" classname="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>featured recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlog(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default Contact;
