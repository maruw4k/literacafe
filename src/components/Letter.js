import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledLetter = styled.span`
  font-family: ${theme.font.family.title};
  font-weight: ${theme.font.weight.bold};
  color: black;
  background: url(${({ background }) => (background ? background : '')})
    no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32rem;
`;

export default props => (
  <ParallaxProvider>
    <Parallax className="custom-class" x={[-30, 0]} tagOuter="figure">
      <StyledLetter background={props.background}>{props.letter}</StyledLetter>
    </Parallax>
  </ParallaxProvider>
);
