import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/Main/MainTemplate';
import HeroImage from 'components/HeroImage';
import Articles from 'templates/News/Articles';

const NewsPage = data => (
  <MainTemplate>
    <HeroImage
      fileName={data.data.mainHeroImg.childImageSharp.fluid.src}
      mihHeight="30vh"
      opacity={0.2}
      backgroundSize="cover"
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
