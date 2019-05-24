import React from 'react';
import HeroImage from 'components/HeroImage';
import MainTemplate from 'templates/MainTemplate';
import DayLunch from 'templates/DayLunch';
import OurMenu from 'templates/OurMenu';
import { graphql } from 'gatsby';

const IndexPage = data => (
  <MainTemplate>
    <HeroImage
      fileName={data.data.file.publicURL}
      minHeight="70vh"
      opacity={0}
      text="We believe a cup of coffee is one of the most important, simple
          pleasures in life"
    />
    <div className="container">
      <DayLunch />
      <OurMenu />
    </div>
  </MainTemplate>
);

export default IndexPage;

export const query = graphql`
  query {
    file(name: { eq: "home-main-photo" }) {
      name
      publicURL
    }
  }
`;
