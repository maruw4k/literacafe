import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const HeroText = styled.h1`
  font-family: ${theme.font.family.title};
  font-weight: 400;
  font-size: 4rem;
  line-height: 1;
  color: white;
  max-width: 700px;
  margin: 0;

  ${theme.mq.tablet} {
    font-size: 6rem;
  }
`;

const StyledHero = styled(LazyHero)`
    div {
     ${({ backgroundSize }) => (backgroundSize ? 'background-size:' + backgroundSize : '')}; 
    }
`;

export default props => (
  <StyledHero
    imageSrc={props.fileName}
    minHeight={props.minHeight}
    opacity={props.opacity}
    color="#000"
    isCentered={true}
    parallaxOffset={100}
    backgroundSize={props.backgroundSize}
    transitionDuration={200}
  >
    <HeroText>{props.text}</HeroText>
  </StyledHero>
);
