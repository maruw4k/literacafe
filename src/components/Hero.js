import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { theme } from '../assets/styles/theme';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  height: ${props => props.height || '100vh'};
`;

const Overlay = styled.div`
  text-align: center;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > picture img {
  transform: translateY(${props => props.bposition}px);
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 100%'} !important;
    font-family: 'object-fit: ${props =>
      props.fit || 'cover'} !important; object-position: ${props =>
  props.position || '50% 50%'} !important;'
    
  }
`;

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

class Hero extends React.Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Container {...this.props}>
        <BgImage {...this.props} bposition={this.state.offset / 4} />
        <Overlay>
          <HeroText>{this.props.text}</HeroText>
        </Overlay>
      </Container>
    );
  }
}

export default Hero;
