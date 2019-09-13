import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledCategoryNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 99;
  padding: 0 15px;
  width: 100%;
  border-bottom: 1px solid grey;
  line-height: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    flex-wrap: wrap;
    margin: 0;
    height: 65px;
    text-align: center;

    li {
      width: 33.3%;
      ${theme.mq.tablet} {
        margin-bottom: 1rem;
      }
    }

    ${theme.mq.tablet} {
      flex-direction: column;
      height: initial;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      li {
        width: initial;
      }
    }
  }

  ${theme.mq.tablet} {
    border-bottom: none;
    display: block;
    position: sticky;
    margin-top: 100px;
    top: 150px;
    height: 330px;
    width: 20%;
    left: 2vw;
    float: left;
    background-color: initial;
  }

  ${theme.mq.desktop} {
    width: 15%;
  }
  ${theme.mq.huge} {
    margin-left: 15%;
    max-width: 250px;
  }
`;

export default ({ categories }) => (
  <StyledCategoryNav>
    <ul>
      {categories.map((item, index) => (
        <li key={index}>
          <a href={'#' + item.node.id}>{item.node.name}</a>
        </li>
      ))}
    </ul>
  </StyledCategoryNav>
);
