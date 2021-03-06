import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import Letter from 'components/Letter';
import { theme } from 'assets/styles/theme';
import RevealBlock from 'components/RevealBlock';

const StyledWrapper = styled.section`
  padding-bottom: 10rem;
  position: relative;

  &:after {
    content: '';
    background-image: url(${({ cupCircle }) =>
      '' + cupCircle + '' ? cupCircle : ''});
    width: 35rem;
    height: 35rem;
    position: absolute;
    bottom: -14rem;
    right: -16rem;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:before {
    content: '';
    background-color: ${theme.color.lightGray};
    position: absolute;
    right: 0;
    height: 100%;
    z-index: -99;
    width: 200vw;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.7fr 0.3fr;
  grid-template-areas: 'photo photo' 'text text' 'button button';
  height: auto;

  ${theme.mq.tablet} {
    height: 320px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 'text photo' 'text photo' 'button photo';
  }
`;

const PhotoContainer = styled.div`
  grid-area: photo;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: button;
`;

const StyledTextContainer = styled.div`
  grid-area: text;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;

  p {
    margin: 0 0 2rem 0;
  }
`;

const NewsHeader = styled.h3`
  font-family: ${theme.font.family.title};
  font-size: 2.4rem;
  font-style: italic;
  font-weight: normal;
  margin: 0 0 2rem 0;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circles/cup-circle-3.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        letterW: file(relativePath: { eq: "home-photo2.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        newestArticle: strapiArticle {
          id
          title
          lead
          photo {
            childImageSharp {
              fixed(width: 600, height: 330) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>
        <Letter
          letter="W"
          background={data.letterW.childImageSharp.fixed.src}
          top={-12}
          left={-15}
        />

        <SectionHeader title="Wydarzenia" />

        <StyledContent>
          <PhotoContainer>
            <RevealBlock direction="left" />
            {data.newestArticle.photo && (
              <Img fixed={data.newestArticle.photo.childImageSharp.fixed} />
            )}
          </PhotoContainer>

          <StyledTextContainer>
            <NewsHeader>{data.newestArticle.title}</NewsHeader>
            <p>{data.newestArticle.lead}</p>
          </StyledTextContainer>

          <StyledButtonContainer>
            <Button title="Zobacz" to="wydarzenia" />
          </StyledButtonContainer>
        </StyledContent>
      </StyledWrapper>
    )}
  />
);
