import React from 'react';
import HeroImage from 'components/HeroImage';
import MainTemplate from 'templates/MainTemplate';
import DayLunch from 'templates/DayLunch';
import OurMenu from 'templates/OurMenu';
import News from 'templates/News';
import About from 'templates/About';
import { graphql } from 'gatsby';

const IndexPage = data => (
  <MainTemplate>
    <HeroImage
      fileName={data.data.mainHeroImg.childImageSharp.fluid.src}
      minHeight="70vh"
      opacity={0}
      text="We believe a cup of coffee is one of the most important, simple
          pleasures in life"
    />
    <div className="container">
      <DayLunch />
      <OurMenu />
      <News />
    </div>

    <HeroImage
      fileName={data.data.secondHeroImg.childImageSharp.fluid.src}
      minHeight="40vh"
      opacity={0}
    />

    <div className="container">
      <About />
    </div>

  </MainTemplate>
);

export default IndexPage;

export const query = graphql`
  query {
    mainHeroImg: file(relativePath: { eq: "home-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    secondHeroImg: file(relativePath: { eq: "home-photo3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
