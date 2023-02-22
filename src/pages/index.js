import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { page, text } from "../examples/home.module.css";
import { ExampleButton } from "../examples/button";
export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>hello world!</h1>
        <p>Lorem ipsum dolor sit amet consectur</p>
      </div>
    </Layout>
  );
}
