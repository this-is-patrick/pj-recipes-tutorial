import * as React from "react";
import { FaImages } from "react-icons/fa";
import Layout from "../components/Layout";
import Images from "../examples/Images";

export default function Home() {
  return (
    <Layout>
      <h1>Home page</h1>
      <Images></Images>
    </Layout>
  );
}
