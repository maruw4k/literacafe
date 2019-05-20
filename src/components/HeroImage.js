import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';

const HeroText = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 4.5rem;
  margin: 0;
`;

class HeroImage extends Component {
  render() {
    return (
      <LazyHero
        imageSrc="/static/home-main-photo-bbd830a9c36a8f36507ebed4b266f2f0.jpg"
        opacity={0} isCentered={true} parallaxOffset={100} minHeight={'75vh'}
      >
        <HeroText>
          We believe a cup of coffee is one of the most important, simple
          pleasures in life
        </HeroText>
      </LazyHero>
    );
  }
}

export default HeroImage;
