import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1> the history of your company...</h1>
        <p className="text"> lorem ipsum dolor sit amet conestcut</p>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  color: red;
  h1 {
    color: blue;
  }
  .text {
    text-transform: uppercase;
  }
`;
export default about;
