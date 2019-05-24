import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import { theme } from 'assets/styles/theme';
import cupCircle from 'assets/images/cup-circle-3.png';

const StyledWrapper = styled.section`
  padding-bottom: 10rem;
  position: relative;

  &:after {
    content: '';
    //@todo Add image src from graphql
    background-image: url(${cupCircle});
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

const StyledPhotoContainer = styled.div`
  grid-area: photo;
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
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 2rem 0;

  span {
    text-transform: none;
    font-style: italic;
    font-weight: normal;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        sectionPhoto: file(relativePath: { eq: "home-photo2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        cupCircle: file(relativePath: { eq: "cup-circle-3.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper>
        <SectionHeader title="Wydarzenia" />

        <StyledContent>
          <StyledPhotoContainer>
            <Img fluid={data.sectionPhoto.childImageSharp.fluid} />
          </StyledPhotoContainer>

          <StyledTextContainer>
            <NewsHeader>
              <span>jesienna</span>dziewczyna
            </NewsHeader>
            <p>
              Serdecznie zapraszamy na jesienny koncert, gdzie w klimatycznym
              wnętrzu kawiarenki zanurzymy się w muzykę wypełnioną po brzegi
              najpiękniejszą poezją.
            </p>

            <p>
              <b>Wystąpią:</b> <br />
              Margo Promińska - wokal Weronika Olbrot - piano
            </p>
          </StyledTextContainer>

          <StyledButtonContainer>
            <Button title="Zobacz" to="menu" />
          </StyledButtonContainer>
        </StyledContent>
      </StyledWrapper>
    )}
  />
);
