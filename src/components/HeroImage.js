import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';

const HeroText = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 4.5rem;
  margin: 0;
`;

export default props => (
  <LazyHero
    imageSrc={props.fileName}
    opacity={0}
    isCentered={true}
    parallaxOffset={100}
    minHeight={props.minHeight}
    transitionDuration={200}
  >
    <HeroText>{props.text}</HeroText>
  </LazyHero>
);
