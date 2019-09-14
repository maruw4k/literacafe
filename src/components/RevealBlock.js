import React from 'react';
import styled from 'styled-components';

const RevealBlock = styled.div`
  [data-aos='reveal-top'],
  [data-aos='reveal-left'],
  [data-aos='reveal-right'],
  [data-aos='reveal-bottom'] {
    transition-property: transform;
    transition-delay: 0.4s;
  }

  [data-aos='reveal-left'] {
    transform: scaleX(1);
    &.aos-animate {
      transform: scaleX(0);
      transform-origin: 0 100%;
    }
  }

  [data-aos='reveal-right'] {
    transform: scaleX(1);
    &.aos-animate {
      transform: scaleX(0);
      transform-origin: 100% 0;
    }
  }

  [data-aos='reveal-top'] {
    transform: scaleY(1);
    &.aos-animate {
      transform: scaleY(0);
      transform-origin: 100% 0;
    }
  }

  [data-aos='reveal-bottom'] {
    transform: scaleY(1);
    &.aos-animate {
      transform: scaleY(0);
      transform-origin: 0 100%;
    }
  }

  .reveal-block {
    position: absolute;
    top: 0;
    width: 100%;
    height: 101%;
    background: white;
    z-index: 9;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: gray;
      transition-property: transform;
      transition-duration: 0.5s;
      transform: scaleX(0);
      transform-origin: 0 100%;
    }

    &--top::before {
      transform: scaleY(0);
      transform-origin: 0 100%;
    }

    &--left::before {
      transform: scaleX(0);
      transform-origin: 100% 0;
    }

    &--bottom::before {
      transform: scaleY(0);
      transform-origin: 100% 0;
    }

    &.aos-animate::before {
      transform: scaleX(1);
    }
  }
`;

export default (props) => (
  <RevealBlock>
    <div
      data-aos={`reveal-${props.direction}`}
      className={`reveal-block reveal-block--${props.direction}`}
    />
  </RevealBlock>
);
