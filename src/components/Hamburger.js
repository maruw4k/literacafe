import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledHamburger = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  height: 5rem;
  position: relative;
  width: 5rem;
  span {
    background-color: white;
    display: block;
    height: 1px;
    left: calc(50% - 15px);
    position: absolute;
    transform-origin: center;
    transition-duration: 150ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 30px;
    &:nth-child(1) {
      top: calc(50% - 8px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 6px);
    }
  }
  &:hover {
    background-color: rgba(black, 0.05);
  }
  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
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
      className={(props.isOpen ? ' is-active' : '')}
      data-target="navMenu"
      aria-label="Otwórz menu"
      onClick={props.onClick}
    >
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
