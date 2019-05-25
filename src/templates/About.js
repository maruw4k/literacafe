import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import { theme } from 'assets/styles/theme';

const StyledWrapper = styled.section`
  padding-bottom: 10rem;
  position: relative;

  &:after {
    content: '';
    background-image: url(${({ cupCircle }) => (cupCircle ? cupCircle : '')});
    width: 35rem;
    height: 35rem;
    position: absolute;
    bottom: 70%;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.7fr;
  grid-template-areas: 'first-text first-text' 'second-text second-text' 'button button';
  height: auto;

  ${theme.mq.tablet} {
    height: 320px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'first-text second-text' 'button button';
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: button;
`;

const StyledFirstTextContainer = styled.div`
  grid-area: first-text;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;

  p {
    margin: 0 0 2rem 0;
  }
`;

const StyledSecondTextContainer = styled.div`
  grid-area: second-text;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;

  p {
    margin: 0 0 2rem 0;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circle-4.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>

        <SectionHeader title="O literze" />

        <StyledContent>
          <StyledFirstTextContainer>
            LiteraCafe to kawiarnia zlokalizowana przy ulicy Literackiej, na
            warszawskich Bielanach. Przyjazne wszystkim miejsce spotkań przy
            pysznej kawie, doskonałych ciastach. Tu, codziennie rano będziecie
            mogli Państwo kupić świeże bułeczki, croissanty, pieczywo jasne i
            ciemne, z ziarnami i bez!
          </StyledFirstTextContainer>

          <StyledSecondTextContainer>
            W naszej kawiarni znajdą Państwo wiele książek, które można czytać
            na miejscu delektując się kawą lub „wypożyczyć”, ale nie jak w
            zwykłej bibliotece. Żadnych kart i formalności! Wystarczy wziąć
            książkę z półki a po jej przeczytaniu, to Państwo decydują czy oddać
            tę samą czy przynieść inną. Do dyspozycji naszych Gości mamy gry
            planszowe zarówno klasyczne jak i nowości, więc zapraszamy do….
            grywalizacji !!!
          </StyledSecondTextContainer>

          <StyledButtonContainer>
            <Button title="Zobacz" to="o-nas" />
          </StyledButtonContainer>
        </StyledContent>
      </StyledWrapper>
    )}
  />
);
