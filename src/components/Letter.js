import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledLetter = styled.span`
  display: none;

  ${theme.mq.tablet} {
    display: inline;
    position: absolute;
    left: ${({ left }) => (left ? '0' : 'initial')};
    right: ${({ right }) => (right ? '0' : 'initial')};
    top: ${({ top }) => (top ? top + 'rem' : '0')};
    font-family: ${theme.font.family.title};
    font-weight: ${theme.font.weight.bold};
    color: black;
    background: url(${({ background }) => (background ? background : '')})
      no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 27rem;
  }

  ${theme.mq.huge} {
    left: ${({ left }) => (left ? left + '%' : 'initial')};
    right: ${({ right }) => (right ? right + '%' : 'initial')};
    top: ${({ top }) => (top ? top + 'rem' : '0')};
    font-size: 32rem;
  }
`;

const Letter = class extends Component {
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 1000,
    });
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    return (
      <div
        className="aos-init"
        data-aos={this.props.left ? 'fade-right' : 'fade-left'}
      >
        <StyledLetter
          left={this.props.left}
          right={this.props.right}
          top={this.props.top}
          // TODO: Add lazy loading background image
          background={this.props.background}
        >
          {this.props.letter}
        </StyledLetter>
      </div>
    );
  }
};

export default Letter;
