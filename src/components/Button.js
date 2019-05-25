import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  border: 1px solid black;
  color: black;
  padding: 2rem 9.5rem 2rem 3rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s color;

  :before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 90%;
    left: -80px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #000000;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 0.3s, opacity 0.3s;
  }

  &:hover {
    text-decoration: none;
    color: white;

    :before {
      transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
      transform: scale3d(9, 9, 1);
    }

    &:after {
      border-color: white;
    }
  }

  &:after {
    content: '→';
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 65px;
    border-left: 1px solid black;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: border-left-color 0.3s;
  }
`;

const Button = props => {
  return <StyledLink to={props.to}>{props.title}</StyledLink>;
};

export default Button;
