import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';
import heroImage from 'assets/images/home-main-photo.jpg';

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
        imageSrc={heroImage}
        opacity={0}
        isCentered={true}
        parallaxOffset={100}
        minHeight={'75vh'}
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

