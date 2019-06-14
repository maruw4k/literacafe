import React from 'react';
import { graphql } from 'gatsby';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
import Articles from 'templates/News/Articles';

const NewsPage = data => (
  <MainTemplate>

    <Hero
      fluid={data.data.mainHeroImg.childImageSharp.fluid}
      height="40vh"
      opacity={0.2}
      text="Wydarzenia i newsy"
    />

    <Articles />
  </MainTemplate>
);

export default NewsPage;

export const query = graphql`
  {
    mainHeroImg: file(relativePath: { eq: "news-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
