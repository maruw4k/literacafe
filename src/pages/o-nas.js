import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MainTemplate from 'templates/Main/MainTemplate';
import Hero from 'components/Hero';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Letter from 'components/Letter';
import { theme } from 'assets/styles/theme';

const StyledContainer = styled.div`
  margin-left: ${({ right }) => (right ? '0' : 'auto')};
  margin-right: auto;
  max-width: 1100px;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  padding-bottom: ${props => props.paddingBottom};
  &:after {
    content: '';
    background-image: url(${({ cupCircle }) =>
  '' + cupCircle + '' ? cupCircle : ''});
    width: 35rem;
    height: 35rem;
    position: absolute;
    top: -30rem;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const PhotoContainer = styled.div`
  margin-left: ${({ right }) => (right ? 'auto' : '0')};
  ${({ center }) => (center ? 'margin: 0 auto;' : '')};
  padding-bottom: 4rem;
  max-width: 1500px;
  position: relative;
  z-index: -1;
`;

const PhotoText = styled.h3`
  font-family: ${theme.font.family.title};
  font-weight: 400;
  font-size: 3rem;
  line-height: 1;
  text-align: center;
  color: white;
  max-width: 700px;
  margin: 0;
  z-index: 99;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${theme.mq.tablet} {
    font-size: 4.5rem;
  }
`;

const StyledParagraph = styled.p`
  margin-left: ${({ right }) => (right ? '0' : 'auto')};
  max-width: 500px;
`;

const SignatureContainer = styled.div`
  text-align: center;
  padding-bottom: 4rem;

  ${theme.mq.tablet} {
    text-align: right;
  }
`;

export default ({data}) => (
  <MainTemplate>
    <Hero
      fluid={data.mainHeroImg.childImageSharp.fluid}
      height="50vh"
      opacity={0.2}
      text="L I T E R A  &nbsp; C A F E"
    />

    <div style={{ overflow: 'hidden' }}>
      <SectionHeader title="Poznaj to miejsce" />

      <StyledContainer
        paddingBottom="4rem"
        cupCircle={data.cupCircle.childImageSharp.fluid.src}
      >
        <StyledParagraph right>
          LiteraCafe to kawiarnia zlokalizowana przy ulicy Literackiej, na
          warszawskich Bielanach. Przyjazne wszystkim miejsce spotkań przy
          pysznej kawie, doskonałych ciastach. Tu, codziennie rano będziecie
          mogli Państwo kupić świeże bułeczki, croissanty, pieczywo jasne i
          ciemne, z ziarnami i bez!
        </StyledParagraph>
        <Letter
          letter="O"
          background={data.letterO.childImageSharp.fixed.src}
          top={-12}
          right={-15}
        />
      </StyledContainer>

      <PhotoContainer right>
        <Img fluid={data.photo1.childImageSharp.fluid} />
      </PhotoContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph>
          W naszej kawiarni znajdą Państwo wiele książek, które można czytać na
          miejscu delektując się kawą lub „wypożyczyć”, ale nie jak w zwykłej
          bibliotece. Żadnych kart i formalności! Wystarczy wziąć książkę z
          półki a po jej przeczytaniu, to Państwo decydują czy oddać tę samą czy
          przynieść inną. Do dyspozycji naszych Gości mamy gry planszowe zarówno
          klasyczne jak i nowości, więc zapraszamy do…. grywalizacji !!!
        </StyledParagraph>
      </StyledContainer>

      <Letter
        letter="W"
        background={data.letterW.childImageSharp.fixed.src}
        top={-20}
        left={15}
      />

      <StyledContainer>
        <PhotoContainer center>
          <PhotoText>
            We believe a cup of coffee is one of the most important, simple
            pleasures in life
          </PhotoText>

          <Img fluid={data.photo2.childImageSharp.fluid} />
        </PhotoContainer>
      </StyledContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph right>
          LiteraCafe to, także strefa sportowa. Wiosna i lato to świetna pora na
          aktywne spędzanie czasu, a że we dwoje zawsze raźniej możecie u nas
          wypożyczyć tandemy. Litera Cafe i Bielany to świetny początek udanej
          wycieczki rowerowej. W trakcie całego roku zapraszamy do wspólnego
          oglądania meczów. Już wkrótce aktualny kalendarz spotkań.
        </StyledParagraph>
      </StyledContainer>

      <Letter
        letter="K"
        background={data.letterK.childImageSharp.fixed.src}
        top={5}
        right={15}
      />

      <PhotoContainer>
        <Img fluid={data.photo3.childImageSharp.fluid} />
      </PhotoContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph>
          LiteraCafe to także, miejsce spotkań tematycznych z podróżnikami,
          artystami. Jeśli chcesz się podzielić z innymi swoją pasją –
          zapraszamy do kontaktu! LiteraCafe to po prostu przestrzeń Twojego
          relaksu.
        </StyledParagraph>
      </StyledContainer>

      <StyledContainer>
        <SignatureContainer>
          <Img fixed={data.signature.childImageSharp.fixed} />
        </SignatureContainer>
      </StyledContainer>
    </div>
  </MainTemplate>
);

export const query = graphql`
  {
    cupCircle: file(relativePath: { eq: "cup-circles/cup-circle-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mainHeroImg: file(relativePath: { eq: "about-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo1: file(relativePath: { eq: "about-photo1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1523) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo2: file(relativePath: { eq: "about-photo2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo3: file(relativePath: { eq: "about-photo3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1523) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fixed(width: 169, height: 51) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    letterO: file(relativePath: { eq: "about-photo1.jpeg" }) {
      childImageSharp {
        fixed(width: 220, height: 290) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    letterW: file(relativePath: { eq: "about-photo2.jpeg" }) {
      childImageSharp {
        fixed(width: 290, height: 290) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    letterK: file(relativePath: { eq: "about-photo3.jpeg" }) {
      childImageSharp {
        fixed(width: 220, height: 290) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
