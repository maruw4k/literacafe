import React from 'react';
import { graphql } from 'gatsby';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
import DayLunch from 'templates/HomePage/DayLunch';
import OurMenu from 'templates/HomePage/OurMenu';
import News from 'templates/HomePage/News';
import About from 'templates/HomePage/About';
import Instagram from 'templates/HomePage/Instagram';

const IndexPage = ({data}) => (
  <MainTemplate>
    <div style={{ overflow: 'hidden' }}>
      <Hero
        fluid={data.mainHeroImg.childImageSharp.fluid}
        height="70vh"
        text="We believe a cup of coffee is one of the most important, simple
          pleasures in life"
      />

      <div className="container">
        <DayLunch />
        <OurMenu />
        <News />
      </div>

      <Hero
        fluid={data.secondHeroImg.childImageSharp.fluid}
        position="top"
        height="45vh"
      />

      <div className="container">
        <About />
        <Instagram />
      </div>
    </div>
  </MainTemplate>
);

export default IndexPage;

export const query = graphql`
  query {
    mainHeroImg: file(relativePath: { eq: "home-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondHeroImg: file(relativePath: { eq: "home-photo3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
