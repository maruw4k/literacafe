import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'components/SectionHeader';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  padding-bottom: 10rem;
  position: relative;
`;

const StyledSubtitle = styled.h3`
  text-align: center;
`;

const InstagramWrapper = styled.section`
  display: flex;
  height: 200px;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "home-photo2.jpg" }) {
          childImageSharp {
            fixed(width: 260, height: 260) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper>
        <SectionHeader title="Instagram" />

        <StyledSubtitle>@literacafe</StyledSubtitle>

        <InstagramWrapper>
          <Img fixed={data.cupCircle.childImageSharp.fixed} />
        </InstagramWrapper>
      </StyledWrapper>
    )}
  />
);
