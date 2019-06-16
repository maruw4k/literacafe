import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { theme } from 'assets/styles/theme';

const StyledBackgroundSection = styled.section`
  width: 100%;
  position: relative;
  height: ${props => props.height || '100vh'};

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: black;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: ${props => props.opacity || '0.1'};

    ${theme.mq.tablet} {
      opacity: ${props => props.opacity || '0'};
    }
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  background-position: ${props => props.position || '50% 50%'};

  ${theme.mq.tablet} {
    &::before {
      background-attachment: fixed;
    }
  }
`;

const HeroText = styled.h1`
  font-family: ${theme.font.family.title};
  font-weight: 400;
  font-size: 5rem;
  text-align: center;
  line-height: 1;
  color: white;
  width: 80%;
  max-width: 700px;
  margin: 0;
  z-index: 99;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${theme.mq.tablet} {
    font-size: 6rem;
  }
`;

export default props => (
  <StyledBackgroundSection height={props.height}>
    <StyledBackgroundImage
      Tag="section"
      fluid={props.fluid}
      position={props.position}
    />
    <HeroText>{props.text}</HeroText>
  </StyledBackgroundSection>
);
