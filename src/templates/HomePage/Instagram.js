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

const StyledHeader = styled(SectionHeader)`
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 20rem;
`;

const StyledLink = styled.a`
  color: black;
  text-align: center;
  font-weight: bold;
  display: block;
  font-size: 2rem;
`;

const InstagramWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  padding-top: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${theme.mq.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(limit: 4) {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper>
        <StyledHeader title="Instagram" />

        <StyledLink
          href="https://www.instagram.com/litera_cafe/"
          target="_blank"
        >
          @literacafe
        </StyledLink>

        <InstagramWrapper>
          <Img
            fluid={
              data.allInstaNode.edges[0].node.localFile.childImageSharp.fluid
            }
          />

          <Img
            fluid={
              data.allInstaNode.edges[1].node.localFile.childImageSharp.fluid
            }
          />

          <Img
            fluid={
              data.allInstaNode.edges[2].node.localFile.childImageSharp.fluid
            }
          />

          <Img
            fluid={
              data.allInstaNode.edges[3].node.localFile.childImageSharp.fluid
            }
          />
        </InstagramWrapper>
      </StyledWrapper>
    )}
  />
);
