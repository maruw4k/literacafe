import React from 'react';
import MainTemplate from 'templates/Main/MainTemplate';
import Hero from 'components/Hero';
import { graphql } from 'gatsby';

const IndexPage = data => (
  <MainTemplate>

    <Hero
      fluid={data.data.mainHeroImg.childImageSharp.fluid}
      height="70vh"
      opacity="0.5"
      text="Strony nie znaleziono"
    />

  </MainTemplate>
);

export default IndexPage;

export const query = graphql`
  query {
    mainHeroImg: file(relativePath: { eq: "coffee-spill.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
