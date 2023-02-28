import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big_copy.jpg" alt="food" />
      <h2>gatsby image component</h2>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    width: 200px;
  }
`;

export default Images;
