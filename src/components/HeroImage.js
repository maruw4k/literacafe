import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const HeroText = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 4.5rem;
  margin: 0;
`;

export default props => (
  <StaticQuery
    //@todo Photo name from props
    query={graphql`
      {
        file(name: { eq: "news-main-photo" }) {
          name
          publicURL
        }
      }
    `}
    render={data => (
      <LazyHero
        imageSrc={data.file.publicURL}
        opacity={0}
        isCentered={true}
        parallaxOffset={100}
        minHeight={props.minHeight}
      >
        <HeroText>{props.text}</HeroText>
      </LazyHero>
    )}
  />
);
