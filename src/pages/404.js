import React from 'react';
import HeroImage from 'components/HeroImage';
import MainTemplate from 'templates/MainTemplate';
import { graphql } from 'gatsby';

const IndexPage = data => (
  <MainTemplate>
    <HeroImage
      fileName={data.data.file.publicURL}
      minHeight="70vh"
      opacity="0.3"
      text="Strony nie znaleziono"
    />
  </MainTemplate>
);

export default IndexPage;

export const query = graphql`
  query {
    file(name: { eq: "coffee-spill" }) {
      name
      publicURL
    }
  }
`;
