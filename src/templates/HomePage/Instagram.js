import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from 'components/SectionHeader';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';
import Letter from 'components/Letter';
import RevealBlock from 'components/RevealBlock';

const Wrapper = styled.section`
  padding-bottom: 10rem;
  position: relative;
`;

const StyledSectionHeader = styled(SectionHeader)`
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 20rem;
`;

const Anchor = styled.a`
  color: black;
  text-align: center;
  font-weight: 500;
  display: block;
  font-size: 2rem;
  font-style: italic;
`;

const PhotoContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
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

    ${PhotoContainer}:nth-child(even) {
      top: 3rem;
    }
  }
`;

const instagramUrl = 'https://www.instagram.com/litera_cafe/';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(limit: 4, sort: { fields: [timestamp], order: [DESC] }) {
          edges {
            node {
              timestamp
              localFile {
                childImageSharp {
                  fixed(width: 290, height: 290) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Letter
          letter="I"
          background={
            data.allInstaNode.edges[0].node.localFile.childImageSharp.fixed.src
          }
          top={-12}
          left={-15}
        />

        <StyledSectionHeader title="Instagram" />

        <Anchor
          href="https://www.instagram.com/litera_cafe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @literacafe
        </Anchor>

        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <InstagramWrapper>
            <PhotoContainer>
              <RevealBlock direction="bottom" />
              <Img
                fixed={
                  data.allInstaNode.edges[0].node.localFile.childImageSharp
                    .fixed
                }
              />
            </PhotoContainer>

            <PhotoContainer>
              <RevealBlock direction="top" />
              <Img
                fixed={
                  data.allInstaNode.edges[1].node.localFile.childImageSharp
                    .fixed
                }
              />
            </PhotoContainer>

            <PhotoContainer>
              <RevealBlock direction="bottom" />
              <Img
                fixed={
                  data.allInstaNode.edges[2].node.localFile.childImageSharp
                    .fixed
                }
              />
            </PhotoContainer>

            <PhotoContainer>
              <RevealBlock direction="top" />
              <Img
                fixed={
                  data.allInstaNode.edges[3].node.localFile.childImageSharp
                    .fixed
                }
              />
            </PhotoContainer>
          </InstagramWrapper>
        </a>
      </Wrapper>
    )}
  />
);
