import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledHamburger = styled.div`
  color: white;
  cursor: pointer;
  height: 6rem;
  position: relative;
  width: 6rem;
  span {
    background-color: white;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 150ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 20px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }
  &:hover {
    background-color: rgba(black, 0.05);
  }
  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }

  ${theme.mq.tablet} {
    display: none;
  }
`;

const Hamburger = props => {
  return (
    <StyledHamburger
      className={
        (props.isOpen ? ' is-active' : '') + ''
      }
      data-target="navMenu"
      onClick={props.onClick}
    >
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
