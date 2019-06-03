import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import { theme } from 'assets/styles/theme';
import cupCircle from 'assets/images/cup-circle-2.png';

const StyledWrapper = styled.section`
  margin: 0 auto 10rem auto;
  position: relative;

  &:after {
    content: '';
    //@todo Add image src from graphql
    background-image: url(${cupCircle});
    width: 35rem;
    height: 35rem;
    position: absolute;
    top: -13rem;
    right: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
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
    grid-template-areas: 'photo text' 'photo text' 'photo button';
  }
`;

const StyledTextContainer = styled.div`
  grid-area: text;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
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

export default () => (
  <StaticQuery
    query={graphql`
      query {
        sectionPhoto: file(relativePath: { eq: "home-photo1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        cupCircle: file(relativePath: { eq: "cup-circle-1.png" }) {
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
        <SectionHeader title="Nasze menu" />
        <StyledContent>
          <StyledPhotoContainer>
            <Img fluid={data.sectionPhoto.childImageSharp.fluid} />
          </StyledPhotoContainer>

          <StyledTextContainer>
            W naszym menu znajdziecie nie tylko wiele rodzajów kawy i pyszne
            ciasta, zapraszamy także na świeżo wyciskane soki oraz koktajle.
            <br />
            <br />
            Dla zgłodniałych mamy przekąski na ciepło i zimno: quiche, tosty,
            sery i wędliny. W ofercie mamy wina białe, czerwone, musujące oraz
            lokalne piwa.
          </StyledTextContainer>

          <StyledButtonContainer>
            <Button title="Zobacz menu" to="menu" />
          </StyledButtonContainer>
        </StyledContent>
      </StyledWrapper>
    )}
  />
);
