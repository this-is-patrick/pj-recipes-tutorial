import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { page, text } from "../examples/about.module.css";
const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1> the history of your company...</h1>
        <p className={text}> lorem ipsum dolor sit amet conestcut</p>
      </div>
    </Layout>
  );
};

export default about;
